require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIACgg8lp15sP2TgQAAHEHAAAKAAAAY3JlZHMuanNvbpVUyY7jNhT8F15tTGvfgAaizfJuy4u8BDmwJUqirZ3UYg*874Hc09NzSCYdnSiSqFevXhW*gyzHBM3QDWjfQVHhBlLUL+mtQEADRh2GqAJDEEAKgQakEVp6U1W861tG5MYbYq8bel3O+UnoOCOcMLHtSH651pnoFTyGoKjfEuz*BvCEFvp45nI3N+3a7C1iV*pWzzeLsFQvShUZm+uyHLNcy257wB4R4gpnkV3EKEUVTGbotoa4+hp9e7JKrEy0XUsQBM7zX1BcdhcVsZeOhva9WFRUt06lBA*C1+h31mnUuMsZV48x0+UeZyZLcW5vj8zx2l5FedIGculGUWq27*QJjjIUTAKUUUxvX9ad2HmWqOx+IKkW3RmcdDinRnmaqrSAzuVa0hfD8sv6WNiLrxFvo07O7mPrLJCDaSChbp1jIidlvD++8AF*iMvmFCbd7rKzfyW+rj68cv0*uh8WG5OVuom+DM26WSg3SZ9vBJMpa3bPmuVsv5L9l+k+ixz3a*QN9iwU+dYj24m8Va7r3GstNRX4uK5ULmVsBXUNQkUXX4RP+pDW1e9YwqRNKIpnkVBEsn9XTebOsfJCCTf6IaznIzxeB*GCtevmHryRGh2SZJUGec7rSXO8n3mn1mt3rSMv99f6wCWpBLERvT47uqLbJAAa+xiCCkWY0ApSnGfPPYYdAhg0W+RXiD7lBQ3rblfBaJyeDK+YTzYvojLzFEPuJgkWtpxdiimx3LWn3PRXMARFlfuIEBSMMaF5dVsgQmCECND+GsIMtTR98H15Xh2CEJcEbrP6iLJYfAx1Y9D6Pt5ndHtLfPNfoEqoDGf24hSnEWk17HOYOXHuEFmDCkBWggTgn52iCoUAI1WNfqZWjMPeuEteTRWRt4IDEH6HAgOgAY4nhd5lmMZVhI1QfqDfGt7WFgU3zJEwRAkz2ssJ8kMq*KyooicKvQ3+4PHT4Y9YIAoxAkBGjDX93NCbceeOCtRWTiOHkW6Gengs6MPa7xLfzFtVuWbPZw5ceeSil7rRbMajKpdgCRempaJsTu+5SXnKq*AAI0MPCEMlxlojBdwcVl4m3TTYIUY8kTSyyvKzmBcDmPBw4+ddV4CYukjhZzu+YvYy++WBWrDg7bhVVIEW*mLjpsVD4WTP21rxagBvvo12IhM90xbTIWLX7fOAZ1ZD47zPRmljdtNhOEqNiZaaHGYnbMp2fkWaHcXsideNfuRQ9ub4Y7d5pdd2ZENS*tCzf2rJHVvpv2GZrkx2OFn3bqZ9X*hhg9s5*BfoL*Pbt34r3FmMfwF4wfr8m*xfzUxsswkFkHx7m*n8*k8*wyvzcxZPhjTQcYFu6e5aQZva7B4*HXEBQJpGFepX2cs6DKcQCGoMrr3rOTLMx*U8zU9xP7R1wTSKj+mYMdThGhMC2Axsoip7AsJynvt9ZVXowhiYEGspQ33npP3*Si2FJIP1IF9P4zVhPw+BtQSwECFAMUAAAICAAoIPJadebD9k4EAABxBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB2BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '23351210165',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'QuophyMatt',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
