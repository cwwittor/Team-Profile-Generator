//HTML of the manager added to the team
const managerOutput = (job) => {
    return `
    <div class= "jobBox col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <div class= "topBox">
                <h3 class="topInfo">${job.name}</h3>
                <h4 class="topInfo">Manager☕</h4>
            </div>
            <div class="botBox">
                <p class="infoBox">Employee ID: ${job.id}</li>
                <p class="infoBox"><a href="mailto:">${job.email}</a></li>
                <p class="infoBox">Office number: ${job.officeNumber}</li>
            </div>
        </div>
        `
}

module.exports = managerOutput;