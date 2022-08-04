// validation script here
const inputs = document.querySelectorAll('input');
const patterns = {}
patterns.telephone = /^\d{11}$/;
patterns.username = /^[a-z\d]{5,12}$/i;
patterns.password = /^[\w@-]{8,20}$/;
patterns.slug = /^[a-z\d-]{8,20}$/;
patterns.email = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

// validation function
const validate = (field, regex) => regex.test(field);

inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {

        if (validate(e.target.value, patterns[e.target.name])) {
            e.target.classList.add('valid');
            e.target.classList.remove('invalid');
        } else {
            e.target.classList.remove('valid');
            e.target.classList.add('invalid');
        }
    })
});