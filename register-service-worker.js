"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/gameF/expo-service-worker.js",{scope:"/gameF/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}));