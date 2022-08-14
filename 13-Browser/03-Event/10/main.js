const districtList = {
  bangkok: ["Select", "Watthana", "Sathon", "Phra Nakhon"],
  khonkaen: ["Select", "Ban Fang", "Chum Phae", "Mueang Khon Kaen"],
  "": ["Select"],
};

const provinceSelect = document.getElementById("province");
const district = document.getElementById("district");

provinceSelect.addEventListener("change", (e) => {
  const changeValue = e.target.value;
  const list = districtList[changeValue];
  district.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const option = document.createElement("option");
    option.value = list[i];
    option.innerHTML = list[i];
    district.append(option);
  }
});
