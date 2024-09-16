document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;

    // Retrieve and display profile picture
    const profilePicture = document.getElementById('profile-picture').files[0];
    const profilePicturePreview = document.getElementById('preview-profile-picture');

    if (profilePicture) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profilePicturePreview.src = e.target.result;
      };
      reader.readAsDataURL(profilePicture);
    }

    // Populate the resume preview section with form values
    document.getElementById('preview-name').textContent = name;
    document.getElementById('preview-email').textContent = email;
    document.getElementById('preview-phone').textContent = phone;
    document.getElementById('preview-education').textContent = education;
    document.getElementById('preview-skills').textContent = skills;
    document.getElementById('preview-experience').textContent = experience;
  });

  // PDF generation and download functionality
  document.getElementById('download-pdf').addEventListener('click', function () {
    const resumeElement = document.getElementById('resume-preview');

    const options = {
      margin:       0.5,
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(resumeElement).save();
  });