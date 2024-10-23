const aboutme_container = document.getElementById('aboutme_container');
const projects_container = document.getElementById('projects_container');

projects_container.hidden = true;

document.addEventListener('DOMContentLoaded', function () {
    const select_buttons = document.querySelectorAll('.select_button');

    select_buttons.forEach(button => {
        button.addEventListener('click', function () {

            const button_text = button.getElementsByTagName('p')[0].textContent.toLowerCase();

            if (button_text.includes('acmp - solutions'))
                return;
            select_buttons.forEach(btn => btn.classList.remove('selected'));

            if (button_text.includes('проекты')) {
                aboutme_container.hidden = true;
                projects_container.hidden = false;
            } else if (button_text.includes('обо мне')) {
                projects_container.hidden = true;
                aboutme_container.hidden = false;
            }

            // Add 'selected' class to the clicked button
            this.classList.add('selected');
        });
    });
});