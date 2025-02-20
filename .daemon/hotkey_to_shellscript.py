import keyboard
import subprocess
import logging
import sys
import os
from logging.handlers import RotatingFileHandler

current_dir = os.path.dirname(os.path.abspath(__file__))
log_file = os.path.join(current_dir, "daemon.log")

# Set up logger first
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

# Create rotating handler
handler = RotatingFileHandler(log_file, maxBytes=5*1024*1024, backupCount=3)  # 5MB per file, 3 backups
handler.setFormatter(logging.Formatter("%(asctime)s [%(levelname)s] %(message)s"))
logger.addHandler(handler)

def execute_shell_script(obs_workspace_value):
    # Get the directory containing the current file
    current_dir = os.path.dirname(os.path.abspath(__file__))

    # Compute the path to the Scripts/Shell folder relative to the current file
    scripts_shell_dir = os.path.normpath(os.path.join(current_dir, '..', 'Scripts', 'Shell'))
    
    # For example, if you have a script file named 'load-workspace.sh' in that folder:
    script_path = os.path.join(scripts_shell_dir, 'workspace-load.sh')
    script_path = script_path.replace('\\', '/')

    if not os.path.exists(script_path):
        logger.error("Script not found: %s", script_path)
        return
    
    # Convert Windows path to WSL (Linux) path
    try:
        linux_script_path = subprocess.check_output(
            ["wsl.exe", "wslpath", "-u", script_path],
            encoding='utf-8'
        ).strip()
    except subprocess.CalledProcessError as e:
        logger.error("Error converting path: %s", e)
        return
    
    # Build the command using the env command to inject the OBS_WORKSPACE variable
    command = [
        "wsl.exe",
        "env",
        f"OBS_WORKSPACE={obs_workspace_value}",
        linux_script_path
    ]
    logger.info(f"Executing: {command}")
    # Streamlined error handling for subprocess
    try:
        process = subprocess.Popen(command, stderr=subprocess.PIPE, creationflags=subprocess.CREATE_NO_WINDOW)
        try:
            _, stderr = process.communicate(timeout=30)
            
            if process.returncode != 0:
                logger.error("Script failed (code %d): %s", 
                    process.returncode,
                    stderr.decode('utf-8', errors='replace') if stderr else "No error output")
                
        except subprocess.TimeoutExpired:
            process.kill()
            logger.error("Script timed out after 30 seconds")
            
    except subprocess.SubprocessError as e:
        logger.error("Failed to execute script: %s", e)

def main():
    # Map hotkeys to workspace values
    hotkeys = {
        'ctrl+alt+1': '1-Main',
        'ctrl+alt+2': '2-Civic',
        'ctrl+alt+3': '3-Algorithms',
        'ctrl+alt+4': '4-Computing',
        'ctrl+alt+5': '5-Personal'
    }
    
    # Register each hotkey with its corresponding workspace value
    for hotkey, workspace in hotkeys.items():
        keyboard.add_hotkey(hotkey, lambda w=workspace: execute_shell_script(w))
    
    print("Daemon is running. Press Ctrl+C to exit.")
    try:
        keyboard.wait()
    except KeyboardInterrupt:
        print("Exiting daemon.")
        sys.exit(0)

if __name__ == '__main__':
    main()
