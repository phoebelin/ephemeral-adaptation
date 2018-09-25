var itemClickListener = function () {//To control what happens when the user clicks an item in a menu
    if (selectionSequence[selectionSequence.length - 1] != this.innerText) {
        itemErrorCtr++;
    }
    else {
        var endTime = new Date().getTime();
        timeToAccomplish = endTime - startTime;
        $(this).trigger('log', ['timeEvent', {time: timeToAccomplish , wrongMenus: menuErrorCtr, wrongItems: itemErrorCtr}]);
        if ((level % 2 == 1 && trialNum >=  practiceTrialNum ) || (level % 2 == 0 && trialNum >= taskTrialNum)) {
            if (level >= 4) {
                level++;
                generateModal(9, "Experiment finished! Thank you! Now you are asked to fill a questionnaire, please press start to proceed to the questionnaire");
                $("#infoModal").modal("show");//Questionnaire
            }
            else {
                /*if (level%2 == 1){//To clear the sequence from trial words
                    for (var i = 0; i < practiceTrialNum; i++){
                        selectionSequence.pop();
                    }
                }*/
                var text;
                trialNum = 1;
                level++;
                while (currentWordGroup.length > 0){
                    currentWordGroup.pop();
                }
                while (usedGroups.length > 0){
                    usedGroups.pop();
                }
                switch (level) {
                    case (2):
                        hit = 100;
                        miss = 26;
                        text = "In this section, you will be asked to select one item from one of three menus for each task. The next task will display immediately after you successfully choose the correct item. There will be " + taskTrialNum + " tasks in total. You will have a chance to practice before you begin the test.";
                        break
                    case (3):
                        hit = 6;
                        miss = 2;
                        text = "In this section, you will be asked to select one item from one of three menus for each task. Some of the items will appear sooner than others. These are items that the system predicted you will most likely need. The predictions may or may not be accurate. The next task will display immediately after you successfully choose the correct item. You will have a chance to practice before you begin the test.
 \nThis is a practice session. You will finish "+practiceTrialNum+" trials.";
                        break
                    case (4):
                        hit = 100;
                        miss = 26;
                        text = "In this section, you will finish" + taskTrialNum + " trials similar to the practice trials.";
                        break
                }
                increaseProgress();
                generateModal(level, text);
                $("#infoModal").modal("show");
                generateMenus();
                generatePrompt();
            }
        }
        else {
            trialNum++;
            startTrial();
            while (currentWordGroup.length > 0){
                currentWordGroup.pop();
            }
            while (usedGroups.length > 0){
                usedGroups.pop();
            }
            generateMenus();
            generatePrompt();
            increaseProgress();
        }
        destroyItems();
    }
};
var menuClickListener = function(menuNum){//Click listener for the menus counts errors and saves timestamp for duration
    if (selectionMenu != menuNum){
        menuErrorCtr++;
    }
    else
    {
        startTime = new Date().getTime();
        if (level == 3 || level == 4){
            fadeItems(menuNum);
        }
    }
};