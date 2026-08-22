
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging.js";

import { app } from "./firebase.js";


const messaging = getMessaging(app);


getToken(messaging, {
    vapidKey: "BKbHtm9pmdbyaNY5iSUXILdGVvQO45FMsvswwKL_4ywKCL3kHTF6s8ORc3-ixA0iHbTM7GRg8m0BlQyalHx_J8w"
})
.then((token) => {

    console.log("Token del invitado:", token);

})
.catch((error) => {

    console.log("Error obteniendo permiso:", error);

});