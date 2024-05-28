document.getElementById('health-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Vui lòng nhập giá trị hợp lệ cho cân nặng và chiều cao.");
        return;
    }

    let bmi = calculateBMI(weight, height);
    let category = getBMICategory(bmi);

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Chỉ số BMI của bạn là: <strong>${bmi.toFixed(2)}</strong></p>
                           <p>Phân loại: <strong>${category}</strong></p>`;
});

function calculateBMI(weight, height) {
    return weight / (height * height);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Thiếu cân";
    } else if (18.5 <= bmi && bmi < 24.9) {
        return "Bình thường";
    } else if (25 <= bmi && bmi < 29.9) {
        return "Thừa cân";
    } else {
        return "Béo phì";
    }
}
