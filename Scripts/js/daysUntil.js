function daysUntil(dateString) {
    const targetDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    const msInDay = 24 * 60 * 60 * 1000;
    let totalDays = Math.ceil((targetDate - today) / msInDay);
  
    let workDays = 0;
    let currentDate = new Date(today);
  
    while (currentDate <= targetDate) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) workDays++;
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return `${totalDays} - ${workDays}`
}

module.exports = daysUntil