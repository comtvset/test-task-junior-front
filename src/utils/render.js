const notificationBrand = document.querySelector('.notification_brand');
const notificationModel = document.querySelector('.notification_model');
const notificationStatus = document.querySelector('.notification_status');

const settingsText = document.querySelectorAll('.settings_text');
const cardText = document.querySelectorAll('.card_text');
const cardValue = document.querySelectorAll('.card_value');

const iphoneType = document.querySelector('.iphone_type');
const iphoneDescription = document.querySelector('.iphone_description');

const actionButton = document.querySelector('.action_button');

const render = (data) => {
  notificationBrand.innerHTML = data?.device?.brand ?? 'Unknown';
  notificationModel.innerHTML = data?.device?.model ?? '-';
  notificationStatus.innerHTML = `Result: ${data?.device?.status ?? 'N/A'}`;

  settingsText.forEach((item, index) => {
    item.innerHTML = data?.action_required?.items[index]?.name ?? 'N/A';
  });

  cardText.forEach((item, index) => {
    item.innerHTML = data?.personal_info_sections?.[index].name ?? 'N/A';
  });

  cardValue.forEach((item, index) => {
    item.innerHTML = data?.personal_info_sections?.[index].content ?? '';
  });

  iphoneType.innerHTML = data?.device_info?.type ?? 'Unknown';
  iphoneDescription.innerHTML = data?.device_info?.description ?? '-';

  actionButton.innerHTML = data?.actions?.primary ?? 'Oops';
};

export default render;
