const wraith = document.getElementById('wraith');
const cloaking = document.getElementById('cloaking');


cloaking.addEventListener('click', hidden);


function hidden(){
    let status = document.getElementById('wraith').style.visibility;

    if (status == '') {
        document.getElementById('wraith').style.visibility = 'hidden';
    } else if (status == 'hidden') {
        document.getElementById('wraith').style.visibility = '';
    }

    }

