const notificationBrand = document.querySelector('.notification_brand');
const notificationModel = document.querySelector('.notification_model');
const notificationStatus = document.querySelector('.notification_status');

const render = (data) => {
  notificationBrand.innerHTML = data.device.brand;
  notificationModel.innerHTML = data.device.model;
  notificationStatus.innerHTML = `Result: ${data.device.status}`;
};

export default render;
