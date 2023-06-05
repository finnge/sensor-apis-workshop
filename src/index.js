function requestPermission(permission) {
  return new Promise((resolve, reject) => {
    navigator.permissions.query({ name: permission }).then((result) => {
      if (result.state === "granted") {
        console.log(`Permission ${permission} already granted`);
        resolve();
      } else if (result.state === "prompt") {
        console.log(`Permission ${permission} prompt`);
        resolve();
      } else if (result.state === "denied") {
        console.log(`Permission ${permission} denied`);
        reject();
      }
      result.addEventListener("change", () => {
        report(result.state);
      });
    });
  })
}

const $elCard = document.querySelector("[data-js-feature='AmbientLightSensor']");
$elData = $elCard.querySelector(".card__data");
$elTime = $elCard.querySelector(".card__time");


(async () => {
  try {
    await requestPermission("ambient-light-sensor");
    console.log("Permission granted");

    // you're code here

  } catch (error) {
    console.log("Permission denied");
  }
})();
