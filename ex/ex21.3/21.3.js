const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];
/* 1 */ 
let ol = document.createElement('ol');
document.body.appendChild(ol)

users.forEach(s => {
    let li = document.createElement(`li`);
    li.innerText = s.firstName + " " + s.lastName;
    ol.appendChild(li);
    /* 3 */ 
    li.setAttribute(`data-id`,s.id);
});

/* 2 */ 

ol.style.listStyle = `none`;







