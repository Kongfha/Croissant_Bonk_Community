import { getItems, updateScore } from "./api.js";
import { BONK_CNT, AddBONK, beforeBonk, updateBeforeBonk, ResetBonk,time_cnt,timeReset,timeAdd} from "./config.js";

export async function Bonk(){
    AddBONK();
    const score = document.getElementById("sc_point");
    score.innerText = parseInt(BONK_CNT);
}

function drawScore(items) { //finish
    const score_board = document.getElementById("scoreboard");
    const head = document.createElement("tr");
    head.className = "boardheader";
    const Rank = document.createElement("th");
    Rank.innerText = "Rank";
    const Name = document.createElement("th");
    Name.innerText = "Name";
    const Score = document.createElement("th");
    Score.innerText = "Score";
    head.appendChild(Rank);
    head.appendChild(Name);
    head.appendChild(Score);
    score_board.innerHTML = "";
    score_board.appendChild(head);
    // Clear all elements
    let rank = 1;
    for (const item of items["scoreBoard"]) {
        if(rank == 11){
            break;
        }
        const score_area = document.createElement("tr");
        score_area.className = "boardcell";
        const rank_area = document.createElement("td");
        rank_area.innerText = rank;
        rank = parseInt(rank) + 1;
        const name_area = document.createElement("td");
        name_area.innerText = item.name;
        const score_text = document.createElement("td");
        score_text.innerText = item.score;
        score_area.appendChild(rank_area);
        score_area.appendChild(name_area);
        score_area.appendChild(score_text);
        score_board.appendChild(score_area);
    }
}

export async function fetchaAnddrawScore(){
    const items = await getItems("scores");
    drawScore(items);
}

export async function CreateScore(){
    const nameToadd = document.getElementById("user");
    if(nameToadd.value == ""){
        window.alert("Username Required.");
        return;
    }
    const Data = {
        name: nameToadd.value,
        score: BONK_CNT,
    };
    
    await updateScore(Data);
}

export async function checkBonk(){
    if(BONK_CNT == 0) return;   
    if(parseInt(BONK_CNT) == parseInt(beforeBonk)){
        if(time_cnt>=5){
            await CreateScore();
            await ResetBonk();
            console.log("Updated");
            timeReset();
            const score = document.getElementById("sc_point");
            score.innerText = parseInt(BONK_CNT);
            return;
        }
        else{
            timeAdd();
            console.log(time_cnt);
            return
        }
    }
    timeReset();
    updateBeforeBonk();
    console.log(beforeBonk);
}

