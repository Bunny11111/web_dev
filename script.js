fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
.then(response => response.json())
.then(data => {
  const contributionsList = document.getElementById('contributions-list');
  data.forEach(contribution => {
    const listItem = document.createElement('li');
    const avatarImg = document.createElement('img');
    avatarImg.src = contribution.avatar;
    avatarImg.alt = contribution.name; 

   
    const nameLabel = document.createElement('span');
    nameLabel.textContent = `Name: ${contribution.name}`;
    nameLabel.classList.add('label', 'name'); 
    
    const pointsLabel = document.createElement('span');
    pointsLabel.textContent = `Points: ${contribution.points}`;
    pointsLabel.classList.add('label', 'points');
   
    listItem.appendChild(avatarImg);
    listItem.appendChild(nameLabel);
    listItem.appendChild(document.createElement('hr')); 
    listItem.appendChild(pointsLabel);

   
    contributionsList.appendChild(listItem);
  });
})
.catch(error => {
  console.error('Error:', error);
});
