let grocery1Amount;
let grocery2Amount;
let grocery3Amount;

function calculateTotal() {
    grocery1Amount = parseFloat(document.getElementById("Grocery-1_Amount").value);
    grocery2Amount = parseFloat(document.getElementById("Grocery-2_Amount").value);
    grocery3Amount = parseFloat(document.getElementById("Grocery-3_Amount").value);

    let total = grocery1Amount + grocery2Amount + grocery3Amount
    document.getElementById('result').innerText = `The total amount is: $${total.toFixed(2)}`;

}