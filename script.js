fetch("https://api.boardroom.info/v1/userActions").then((data)=> {
    console.log(data);
    return data.json();
}).then((objectData)=> {
    console.log(objectData.data);
    let tableData=`<tr>
        <td>${objectData.data.totalProposalsCreated}</td>
        <td>${objectData.data.totalVotesCast}</td>
        <td>${objectData.data.totalDelegations}</td>
    </tr>`;
    document.getElementById("table_body1").innerHTML=tableData;
}).catch((err)=> {
    console.log(err);
});

fetch("https://api.boardroom.info/v1/userActions").then((data)=> {
    console.log(data);
    return data.json();
}).then((objectData)=> {
    // console.log(objectData.data.actionsByWeek);
    let tableData="";
    objectData.data.actionsByWeek.slice(1).map((values)=>{
        tableData+=`<tr>
        <td>${values.week}</td>
        <td>${values.proposalsCreated}</td>
        <td>${values.votesCast}</td>
        <td>${values.delegations}</td>
      </tr>`;
    });
    document.getElementById("table_body2").innerHTML=tableData;
}).catch((err)=> {
    console.log(err);
})