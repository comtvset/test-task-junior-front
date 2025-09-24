const popup = document.querySelector('.popup');
const popupTime = document.querySelector('.popup_time');
const popupCheckup = document.querySelector('.popup_checkup');
const overlay = document.getElementById('overlay');

const settingsValue = document.querySelectorAll('.settings_value');
const imgWarningTransparent = document.querySelectorAll(
  '.img_warning-transparent'
);

const notificationStatus = document.querySelector('.notification_status');

const checkup = () => {
  popupCheckup.classList.add('disabled');
  popupCheckup.style.pointerEvents = 'none';

  let time = 60;

  const interval = setInterval(() => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');

    popupTime.textContent = `${minutes}:${seconds}`;

    time--;

    if (time < 0) {
      clearInterval(interval);
      popup.classList.add('hidden');
      overlay.classList.add('hidden');
      overlay.classList.remove('active');

      settingsValue.forEach((item) => {
        item.innerHTML = '0';
      });

      imgWarningTransparent.forEach((item) => {
        item.style.opacity = '0.2';
      });

      notificationStatus.innerHTML = `Result: Optimization Completed`;
    }
  }, 1000);
};

export default checkup;
