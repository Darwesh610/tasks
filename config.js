/* Board settings. Paste your own Firebase web app config here (see SETUP.md, step 5).
   These values are not secret: they only say which database the board talks to.
   Who may change tasks is decided by the database rules and the admin password. */
window.BOARD_CONFIG = {
  firebase: {
    apiKey: "AIzaSyAhLfJZnbjYz-rtu5LGToM6xb8HJtbQWkk",
    authDomain: "emeralds-tasks.firebaseapp.com",
    projectId: "emeralds-tasks",
    appId: "1:138667116872:web:4f3b5e6398635d30d50b7d"
  },
  /* the super admin: the only account that can choose admins on the #super page */
  adminEmail: "codecrush610@gmail.com",
  /* only Google accounts with an email at this domain can open the board (plus the admins) */
  schoolDomain: "emeralds-internationaledu.com"
};
