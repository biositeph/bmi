function checkOrderStatus() {
    let orderCode = document.getElementById("orderCode").value;
    let statusMessage = document.getElementById("statusMessage");
    
    // Mock data for order statuses
    let orderStatuses = JSON.parse(localStorage.getItem("orderStatuses")) || {};
    let status = orderStatuses[orderCode] || "Invalid Code";
    statusMessage.innerHTML = `Status: <strong>${status}</strong>`;
}

function showFollowUpModal() {
    let orderCode = localStorage.getItem("submittedPOCode");
    if (orderCode) {
        document.getElementById("orderCode").value = orderCode;
        let modal = new bootstrap.Modal(document.getElementById('followUpModal'));
        modal.show();
    } else {
        alert("Please submit a ticket first.");
    }
}

function storePOCode(poCode) {
    localStorage.setItem("submittedPOCode", poCode);
    let orderStatuses = JSON.parse(localStorage.getItem("orderStatuses")) || {};
    orderStatuses[poCode] = "Pending";
    localStorage.setItem("orderStatuses", JSON.stringify(orderStatuses));
}



document.addEventListener("DOMContentLoaded", function() {
    let poCode = document.getElementById("submittedPOCode").innerText;
    storePOCode(poCode);
});