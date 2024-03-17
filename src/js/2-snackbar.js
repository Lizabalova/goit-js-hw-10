import iziToast from "izitoast";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const delayInput = document.querySelector('input[name="delay"]');
        const stateInput = document.querySelector('input[name="state"]:checked');

        const delay = parseInt(delayInput.value);

        const promise = new Promise((resolve, reject) => {
            if (stateInput.value === 'fulfilled') {
                setTimeout(() => resolve(delay), delay);
            } else if (stateInput.value === 'rejected') {
                setTimeout(() => reject(delay), delay);
            }
        });

        promise.then((delay) => {
            iziToast.success({
                title: 'Success',
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: 'topRight'
            });
        }).catch((delay) => {
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms`,
                position: 'topRight'
            });
        });
    });
});
