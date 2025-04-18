// reservation.js

export function createReservationPage(containerId) {
    const container = document.getElementById(containerId);
  
    if (!container) {
      console.error('Reservation container not found');
      return;
    }
  
    // Create container
    const wrapper = document.createElement('div');
    wrapper.style.maxWidth = '600px';
    wrapper.style.margin = '80px auto';
    wrapper.style.padding = '40px';
    wrapper.style.backgroundColor = '#fff';
    wrapper.style.borderRadius = '12px';
    wrapper.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
    wrapper.style.fontFamily = 'Poppins, sans-serif';
  
    // Title
    const title = document.createElement('h1');
    title.innerText = 'Reserve a Table';
    title.style.textAlign = 'center';
    title.style.marginBottom = '30px';
    wrapper.appendChild(title);
  
    // Form
    const form = document.createElement('form');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
  
    // Helper to create input fields
    function createField(labelText, inputType, inputId) {
      const label = document.createElement('label');
      label.innerText = labelText;
      label.htmlFor = inputId;
      label.style.marginTop = '15px';
      label.style.fontWeight = '500';
  
      const input = document.createElement('input');
      input.type = inputType;
      input.id = inputId;
      input.required = true;
      input.style.padding = '12px';
      input.style.border = '1px solid #ccc';
      input.style.borderRadius = '8px';
      input.style.fontSize = '16px';
      input.style.marginTop = '5px';
  
      form.appendChild(label);
      form.appendChild(input);
    }
  
    // Name, Email
    createField('Name', 'text', 'resName');
    createField('Email', 'email', 'resEmail');
  
    // Party Size (select)
    const sizeLabel = document.createElement('label');
    sizeLabel.innerText = 'Party Size';
    sizeLabel.style.marginTop = '15px';
    sizeLabel.style.fontWeight = '500';
  
    const partySize = document.createElement('select');
    partySize.id = 'resPartySize';
    partySize.required = true;
    partySize.style.padding = '12px';
    partySize.style.marginTop = '5px';
    partySize.style.border = '1px solid #ccc';
    partySize.style.borderRadius = '8px';
  
    const sizes = ['', '1', '2', '3-4', '5-6', '7+'];
    sizes.forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.innerText = size === '' ? 'Select party size' : size;
      option.disabled = size === '';
      option.selected = size === '';
      partySize.appendChild(option);
    });
  
    form.appendChild(sizeLabel);
    form.appendChild(partySize);
  
    // Date & Time
    createField('Date & Time', 'datetime-local', 'resDateTime');
  
    // Submit Button
    const button = document.createElement('button');
    button.type = 'submit';
    button.innerText = 'Request Reservation';
    button.style.marginTop = '30px';
    button.style.padding = '15px';
    button.style.backgroundColor = '#ff7043';
    button.style.color = 'white';
    button.style.fontSize = '16px';
    button.style.border = 'none';
    button.style.borderRadius = '8px';
    button.style.cursor = 'pointer';
  
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#e85c33';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#ff7043';
    });
  
    form.appendChild(button);
  
    // Thank You Message
    const thankYou = document.createElement('div');
    thankYou.style.display = 'none';
    thankYou.style.textAlign = 'center';
    thankYou.style.marginTop = '40px';
    thankYou.style.fontSize = '18px';
    thankYou.style.color = '#4caf50';
    thankYou.style.fontWeight = '500';
    thankYou.innerText = '✨ Thank you! Your reservation request has been received. ✨\nWe’ll be in touch shortly.';
  
    // Handle form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const data = {
        name: document.getElementById('resName').value,
        email: document.getElementById('resEmail').value,
        partySize: document.getElementById('resPartySize').value,
        dateTime: document.getElementById('resDateTime').value
      };
  
      console.log('Submitted Reservation:', data);
  
      form.style.display = 'none';
      thankYou.style.display = 'block';
    });
  
    wrapper.appendChild(form);
    wrapper.appendChild(thankYou);
    container.appendChild(wrapper);
  }