export function checkValidatePhone(phone: any) {
  var phoneConstant = [
    "086",
    "096",
    "097",
    "098",
    "032",
    "033",
    "034",
    "035",
    "036",
    "037",
    "038",
    "039",
    "089",
    "090",
    "093",
    "070",
    "079",
    "077",
    "076",
    "078",
    "088",
    "091",
    "094",
    "083",
    "084",
    "085",
    "081",
    "082",
    "092",
    "056",
    "058",
    "099",
    "059",
    "095",
  ];

  const result = {
    phone: formatPhone(phone, "84"),
    isValid: false,
  };

  if (result.phone.length !== 11) {
    return result;
  }

  if (result.phone.length !== 11 || isNaN(result.phone) === true) {
    return result;
  }

  result.phone = result.phone.replace("84", "0");

  const basodau = result.phone.substring(0, 3);
  const isFind = phoneConstant.find((element) => element === basodau);

  if (isFind) {
    result.isValid =
      true && /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(String(result.phone));
    return result;
  }

  return result;
}

function formatPhone(input: any, country = "84") {
  if (typeof country === "undefined") {
    country = "84";
  }
  const newPhone = input.toString().replace(/^0/, "84");

  if (country !== "84") {
    return newPhone.replace(/^84/, "0");
  }

  return newPhone;
}
