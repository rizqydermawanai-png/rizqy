document.addEventListener('DOMContentLoaded', function() {
    const fittingForm = document.getElementById('fitting-form');
    if (fittingForm) {
        fittingForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const height = parseInt(document.getElementById('height').value);
            const weight = parseInt(document.getElementById('weight').value);

            if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
                alert('Silakan masukkan tinggi dan berat badan yang valid.');
                return;
            }

            // Simple recommendation logic
            let tshirtSize, shirtSize, jacketSize, pantsSize;

            // T-Shirt / Shirt / Jacket Logic (based on a simplified BMI/body frame concept)
            if (height < 165) {
                tshirtSize = 'S';
                shirtSize = 'S';
                jacketSize = 'S';
            } else if (height >= 165 && height < 175) {
                if (weight < 70) {
                    tshirtSize = 'M';
                    shirtSize = 'M';
                    jacketSize = 'M';
                } else {
                    tshirtSize = 'L';
                    shirtSize = 'L';
                    jacketSize = 'L';
                }
            } else if (height >= 175 && height < 185) {
                if (weight < 80) {
                    tshirtSize = 'L';
                    shirtSize = 'L';
                    jacketSize = 'L';
                } else {
                    tshirtSize = 'XL';
                    shirtSize = 'XL';
                    jacketSize = 'XL';
                }
            } else { // height >= 185
                tshirtSize = 'XL';
                shirtSize = 'XL';
                jacketSize = 'XL';
            }

            // Pants Logic (based on a simplified waist size estimation)
            if (weight < 60) {
                pantsSize = '30';
            } else if (weight >= 60 && weight < 75) {
                pantsSize = '32';
            } else if (weight >= 75 && weight < 90) {
                pantsSize = '34';
            } else {
                pantsSize = '36';
            }

            // Display results
            document.getElementById('tshirt-size').textContent = tshirtSize;
            document.getElementById('shirt-size').textContent = shirtSize;
            document.getElementById('pants-size').textContent = pantsSize;
            document.getElementById('jacket-size').textContent = jacketSize;

            const resultSection = document.getElementById('recommendation-result');
            resultSection.style.display = 'block';

            // Scroll to results
            resultSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
