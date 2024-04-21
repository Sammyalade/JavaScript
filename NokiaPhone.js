const readline = require('readline');

const collector = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mainMenu() {
    console.log(`
        MAIN MENU
        Enter 
        1 => Phone Book
        2 => Messages
        3 => Chat
        4 => Call Register
        5 => Tones
        6 => Settings
        7 => Call divert
        8 => Games
        9 => Calculator
        10 => Reminders
        11 => Clock
        12 => Profiles
        13 => SIM services
        14 => Exit
        `);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                phoneBookMenu();
                break;
            case '2':
                messagesMenu();
                break;
            case '3':
                chatMenu();
                break;
            case '4':
                callRegister();
                break;
            case '5':
                tonesMenu();
                break;
            case '6':
                settingsMenu();
                break;
            case '7':
                callDivert();
                break;
            case '8':
                gamesMenu();
                break;
            case '9':
                calculator();
                break;
            case '10':
                reminders();
                break;
            case '11':
                clock();
                break;
            case '12':
                profiles();
                break;
            case '13':
                simServices();
                break;
            case '14':
                collector.close();
                break;
            default:
                console.log("Invalid input.");
                mainMenu();
        }
    });
}

function phoneBookMenu() {
    console.log(`PHONE BOOK MENU
        Enter
        1 => Search
        2 => Service Nos
        3 => Add Name
        4 => Erase
        5 => Edit
        6 => Assign tone
        7 => Send B' Card
        8 => Options
        9 => Speed Dials
        10 => Voice Tag
        11 => Exit
        `);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                search();
                break;
            case '2':
                serviceNumbers();
                break;
            case '3':
                addName();
                break;
            case '4':
                erase();
                break;
            case '5':
                edit();
                break;
            case '6':
                assignTone();
                break;
            case '7':
                sendBCard();
                break;
            case '8':
                optionsMenu();
                break;
            case '9':
                speedDials();
                break;
            case '10':
                voiceTag();
                break;
            case '11':
                mainMenu();
                break;
            default:
                console.log("Invalid input.");
                phoneBookMenu();
        }
    });
}


function search() {
    console.log(`"Search"
    1 => Exit`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                optionsMenu();
                break;
            default:
                console.log("Invalid input.");
                search();
        }
    });
}

function serviceNumbers() {
    console.log(`Service Number 22345678789
    1 => Exit`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                optionsMenu();
                break;
            default:
                console.log("Invalid input.");
                serviceNumbers();
        }
    });
}

function addName() {
    collector.question("Enter a name: ", (name) => {
        console.log(`You entered " + name "
        1 => Exit`);
        collector.question("Enter: ", (answer) => {
            switch (answer) {
                case '1':
                    optionsMenu();
                    break;
                default:
                    console.log("Invalid input.");
                    addName();
            }
        });
    });
}

function erase() {
    console.log(`Erase
    1 => Exit`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                optionsMenu();
                break;
            default:
                console.log("Invalid input.");
                erase();
        }
    });
}

function edit() {
    console.log(`Edit
     => Exit`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                optionsMenu();
                break;
            default:
                console.log("Invalid input.");
                edit();
        }
    });
}

function assignTone() {
    console.log(`Assign tones
    1 => Exit`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                optionsMenu();
                break;
            default:
                console.log("Invalid input.");
                assignTone();
        }
    });
}

function sendBCard() {
    console.log(`Send B' card
    1 => Exit`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                optionsMenu();
                break;
            default:
                console.log("Invalid input.");
                sendBCard();
        }
    });
}

function optionsMenu() {
    console.log(`OPTION MENU
        Enter 
        1 => Type of view
        2 => Memory Status
        3 => Exit
        `);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                typeOfView();
                break;
            case '2':
                memoryStatus();
                break;
            case '3':
                mainMenu();
                break;
            default:
                console.log("Invalid input.");
                optionsMenu();
        }
    });

    function typeOfView() {
        console.log(`You entered TYPE OF VIEW
            1 => Exit
        `);
        collector.question("Enter: ", (answer) => {
            switch (answer) {
                case '1':
                    optionsMenu();
                    break;
                default:
                    console.log("Invalid input.");
                    typeOfView();
            }
        });
    }

    function memoryStatus() {
        console.log(`12/30 Memory used
            1 => Exit`);
        collector.question("Enter: ", (answer) => {
            switch (answer) {
                case '1':
                    optionsMenu();
                    break;
                default:
                    console.log("Invalid input.");
                    memoryStatus();
            }
        });
    }
}

function speedDials() {
    console.log(`Your most dialed number shows here
        1 => Exit`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                optionsMenu();
                break;
            default:
                console.log("Invalid input.");
                speedDials();
        }
    });
}

function voiceTag() {
    console.log(`Your Voice Tag
    1 => Exit`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                optionsMenu();
                break;
            default:
                console.log("Invalid input.");
                voiceTag();
        }
    });
}

function messagesMenu() {
    console.log(`Enter
    MESSAGE MENU
    1 => Write Messages
    2 => Inbox
    3 => Outbox
    4 => Picture messages
    5 => Templates
    6 => Smileys
    7 => Messages settings
    8 => Info service
    9 => Voice mailbox number
    10 => Service command editor
    11 => Exit to main menu
    `);

    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                console.log(`Write Messages
                1 => Exit`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            mainMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            messagesMenu();
                    }
                });
                break;
            case '2':
                console.log(`Inbox
                Message 1
                Message 2
                1 => Exit`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            mainMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            messagesMenu();
                    }
                });
                break;
            case '3':
                console.log(`Outbox
                Draft
                1 => Exit`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            mainMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            messagesMenu();
                    }
                });
                break;
            case '4':
                console.log(`Picture messages
                1 => Exit`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            mainMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            messagesMenu();
                    }
                });
                break;
            case '5':
                console.log(`Templates
                1 => Exit`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            mainMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            messagesMenu();
                    }
                });
                break;
            case '6':
                console.log(`Smileys
                1 => Exit`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            mainMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            messagesMenu();
                    }
                });
                break;
            case '7':
                console.log(`Messages settings
                1 => Exit`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            mainMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            messagesMenu();
                    }
                });
                break;
            case '8':
                console.log(`Info service
                1 => Exit`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            mainMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            messagesMenu();
                    }
                });
                break;
            case '9':
                console.log(`Voice mailbox number
                1 => Exit`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            mainMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            messagesMenu();
                    }
                });
                break;
            case '10':
                console.log(`Service command editor
                1 => Exit`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            mainMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            messagesMenu();
                    }
                });
                break;
            case '11':
                mainMenu();
                break;
            default:
                console.log("Invalid input.");
                messagesMenu();
        }
    });
}







function chatMenu() {
    console.log(`Enter
    CHAT
    1 => Exit`);

    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                mainMenu();
                break;
            default:
                console.log("Invalid input.");
                chatMenu();
        }
    });
}







function callRegisterMenu() {
    console.log(`Enter
CALL REGISTER MENU
1 => Missed calls
2 => Received calls
3 => Dialled calls
4 => Erase recent calls lists
5 => Show call duration
6 => Show call costs
7 => Call cost settings
8 => Prepaid credit
9 => Exit to menu`);

    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                missedCalls();
                break;
            case '2':
                receivedCalls();
                break;
            case '3':
                dialedCalls();
                break;
            case '4':
                eraseCalls();
                break;
            case '5':
                showCallDuration();
                break;
            case '6':
                showCallCosts();
                break;
            case '7':
                callCostSettings();
                break;
            case '8':
                prepaidMenu();
                break;
            case '9':
                mainMenu();
                break;
            default:
                console.log("Invalid input.");
                callRegisterMenu();
        }
    });
}

function missedCalls() {
    console.log(`Missed Calls list
1 => Exit`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                callRegisterMenu();
                break;
            default:
                console.log("Invalid input.");
                missedCalls();
        }
    });
}

function receivedCalls() {
    console.log(`Received Calls list
1 => Exit`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                callRegisterMenu();
                break;
            default:
                console.log("Invalid input.");
                receivedCalls();
        }
    });
}

function dialedCalls() {
    console.log(`Dialed Calls list
1 => Exit`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                callRegisterMenu();
                break;
            default:
                console.log("Invalid input.");
                dialedCalls();
        }
    });
}

function eraseCalls() {
    console.log(`Dialed Calls list
1 => Exit`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                callRegisterMenu();
                break;
            default:
                console.log("Invalid input.");
                eraseCalls();
        }
    });
}

function showCallDuration() {
    console.log(`Enter
SHOW CALL DURATION MENU
1 => Last call duration
2 => All calls' duration
3 => Received calls' duration
4 => Dialed calls' duration
5 => Clear timers
6 => Exit to menu`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                console.log(`Last call duration
1 => Exit`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            showCallDuration();
                            break;
                        default:
                            console.log("Invalid input.");
                            showCallDuration();
                    }
                });
                break;
            case '2':
                console.log(`All calls duration
1 => Exit`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            showCallDuration();
                            break;
                        default:
                            console.log("Invalid input.");
                            showCallDuration();
                    }
                });
                break;
            case '3':
                console.log(`Received calls duration
1 => Exit`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            showCallDuration();
                            break;
                        default:
                            console.log("Invalid input.");
                            showCallDuration();
                    }
                });
                break;
            case '4':
                console.log(`Dialed calls duration
1 => Exit`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            showCallDuration();
                            break;
                        default:
                            console.log("Invalid input.");
                            showCallDuration();
                    }
                });
                break;
            case '5':
                console.log(`Clear Timers
1 => Exit`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            showCallDuration();
                            break;
                        default:
                            console.log("Invalid input.");
                            showCallDuration();
                    }
                });
                break;
            case '6':
                callRegisterMenu();
                break;
            default:
                console.log("Invalid input.");
                showCallDuration();
        }
    });
}

function showCallCosts() {
    console.log(`Enter
CALL COST MENU
1 => Last call cost
2 => All costs' cost
3 => Clear counter
4 => Exit to menu`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                console.log(`Last call cost
1 => Exit to menu`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            showCallCosts();
                            break;
                        default:
                            console.log("Invalid input.");
                            showCallCosts();
                    }
                });
                break;
            case '2':
                console.log(`All costs' cost
1 => Exit to menu`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            showCallCosts();
                            break;
                        default:
                            console.log("Invalid input.");
                            showCallCosts();
                    }
                });
                break;
            case '3':
                console.log(`Clear Counter
1 => Exit to menu`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            showCallCosts();
                            break;
                        default:
                            console.log("Invalid input.");
                            showCallCosts();
                    }
                });
                break;
            case '4':
                mainMenu();
                break;
            default:
                console.log("Invalid input.");
                showCallCosts();
        }
    });
}


function callCostSettings() {
    console.log(`Enter
CALL COST SETTINGS MENU
1 => Call cost limit
2 => Show cost in
3 => Exit to menu`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                console.log(`Call cost limit
1 => Exit to menu`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            callCostSettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            callCostSettings();
                    }
                });
                break;
            case '2':
                console.log(`Show cost in
1 => Exit to menu`);
                collector.question("Enter: ", (answer) => {
                    switch (answer) {
                        case '1':
                            callCostSettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            callCostSettings();
                    }
                });
                break;
            case '3':
                mainMenu();
                break;
            default:
                console.log("Invalid input.");
                callCostSettings();
        }
    });
}

function prepaidMenu() {
    console.log(`PREPAID MENU
1 => Exit to menu`);
    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                callRegisterMenu();
                break;
            default:
                console.log("Invalid input.");
                prepaidMenu();
        }
    });
}









function tonesMenu() {
    console.log(`TONES MENU
1 => Ringing tone
2 => Ringing volume
3 => Incoming call alert
4 => Composer
5 => Message alert tone
6 => Keypad tones
7 => Warning and games tone
8 => Vibrating alert
9 => Screen saver
10 => Exit to menu`);

    collector.question("Enter: ", (answer) => {
        switch (answer) {
            case '1':
                console.log(`Ringing tone
1 => Exit`);
                collector.question("Enter: ", (subAnswer) => {
                    switch (subAnswer) {
                        case '1':
                            tonesMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            tonesMenu();
                            break;
                    }
                });
                break;
            case '2':
                console.log(`Ringing volume
1 => Exit`);
                collector.question("Enter: ", (subAnswer) => {
                    switch (subAnswer) {
                        case '1':
                            tonesMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            tonesMenu();
                            break;
                    }
                });
                break;
            case '3':
                console.log(`Incoming call alert
1 => Exit`);
                collector.question("Enter: ", (subAnswer) => {
                    switch (subAnswer) {
                        case '1':
                            tonesMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            tonesMenu();
                            break;
                    }
                });
                break;
            case '4':
                console.log(`Composer
1 => Exit`);
                collector.question("Enter: ", (subAnswer) => {
                    switch (subAnswer) {
                        case '1':
                            tonesMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            tonesMenu();
                            break;
                    }
                });
                break;
            case '5':
                console.log(`Message alert tone
1 => Exit`);
                collector.question("Enter: ", (subAnswer) => {
                    switch (subAnswer) {
                        case '1':
                            tonesMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            tonesMenu();
                            break;
                    }
                });
                break;
            case '6':
                console.log(`Keypad tones
1 => Exit`);
                collector.question("Enter: ", (subAnswer) => {
                    switch (subAnswer) {
                        case '1':
                            tonesMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            tonesMenu();
                            break;
                    }
                });
                break;
            case '7':
                console.log(`Warning and games tone
1 => Exit`);
                collector.question("Enter: ", (subAnswer) => {
                    switch (subAnswer) {
                        case '1':
                            tonesMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            tonesMenu();
                            break;
                    }
                });
                break;
            case '8':
                console.log(`Vibrating alert
1 => Exit`);
                collector.question("Enter: ", (subAnswer) => {
                    switch (subAnswer) {
                        case '1':
                            tonesMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            tonesMenu();
                            break;
                    }
                });
                break;
            case '9':
                console.log(`Screen saver
1 => Exit`);
                collector.question("Enter: ", (subAnswer) => {
                    switch (subAnswer) {
                        case '1':
                            tonesMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            tonesMenu();
                            break;
                    }
                });
                break;
            case '10':
                mainMenu();
                break;
            default:
                console.log("Invalid input.");
                tonesMenu();
                break;
        }
    });
}



function settingsMenu() {
    console.log(`Enter
SETTINGS MENU
1 => Call settings
2 => Phone settings
3 => Security settings
4 => Restore factory settings
5 => Exit to menu`);
    collector.question("Enter: ", (inputSettings) => {
        switch (inputSettings) {
            case '1':
                callSettings();
                break;
            case '2':
                phoneSettings();
                break;
            case '3':
                securitySettings();
                break;
            case '4':
                console.log("Restoring factory settings...");
                console.log("Factory settings restored.");
                settingsMenu();
                break;
            case '5':
                mainMenu();
                break;
            default:
                console.log("Invalid input.");
                settingsMenu();
        }
    });
}

function callSettings() {
    console.log(`Enter
CALL SETTINGS MENU
1 => Automatic redial
2 => Speed dialling
3 => Call waiting options
4 => Own number sending
5 => Phone line in use
6 => Automatic answer
7 => Exit to menu`);

    collector.question("Enter: ", (input) => {
        switch (input) {
            case '1':
                console.log(`Automatic redial
1 => Exit`);
                collector.question("Enter: ", (subInput) => {
                    switch (subInput) {
                        case '1':
                            callSettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            callSettings();
                    }
                });
                break;
            case '2':
                console.log(`Speed dialling
1 => Exit`);
                collector.question("Enter: ", (subInput) => {
                    switch (subInput) {
                        case '1':
                            callSettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            callSettings();
                    }
                });
                break;
            case '3':
                console.log(`Call waiting options
1 => Exit`);
                collector.question("Enter: ", (subInput) => {
                    switch (subInput) {
                        case '1':
                            callSettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            callSettings();
                    }
                });
                break;
            case '4':
                console.log(`Own number sending
1 => Exit`);
                collector.question("Enter: ", (subInput) => {
                    switch (subInput) {
                        case '1':
                            callSettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            callSettings();
                    }
                });
                break;
            case '5':
                console.log(`Phone line in use
1 => Exit`);
                collector.question("Enter: ", (subInput) => {
                    switch (subInput) {
                        case '1':
                            callSettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            callSettings();
                    }
                });
                break;
            case '6':
                console.log(`Automatic answer
1 => Exit`);
                collector.question("Enter: ", (subInput) => {
                    switch (subInput) {
                        case '1':
                            callSettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            callSettings();
                    }
                });
                break;
            case '7':
                settingsMenu();
                break;
            default:
                console.log("Invalid input.");
                callSettings();
        }
    });
}

function phoneSettings() {
    console.log(`
Enter
PHONE SETTINGS MENU
1 => Language
2 => Cell info display
3 => Welcome note
4 => Network selection
5 => Light
6 => Confirm SIM services actions
7 => Exit to menu`);
    collector.question("Enter: ", (inputPhoneSettings) => {
        switch (inputPhoneSettings) {
            case '1':
                console.log(`
Language
English
French
Spanish
Yoruba
1 => Exit`);
                collector.question("Enter: ", (inputLanguage) => {
                    switch (inputLanguage) {
                        case '1':
                            phoneSettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            phoneSettings();
                    }
                });
                break;
            case '2':
                console.log(`
Cell info display
1 => Exit`);
                collector.question("Enter: ", (inputCellInfo) => {
                    switch (inputCellInfo) {
                        case '1':
                            phoneSettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            phoneSettings();
                    }
                });
                break;
            case '3':
                console.log(`
Type your Welcome note here
1 => Exit`);
                collector.question("Enter: ", (inputWelcomeNote) => {
                    switch (inputWelcomeNote) {
                        case '1':
                            phoneSettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            phoneSettings();
                    }
                });
                break;
            case '4':
                console.log(`
Network selection
MTN
Glo
Airtel
9Mobile
1 => Exit`);
                collector.question("Enter: ", (inputNetworkSelection) => {
                    switch (inputNetworkSelection) {
                        case '1':
                            phoneSettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            phoneSettings();
                    }
                });
                break;
            case '5':
                console.log(`
Light
1 => Exit`);
                collector.question("Enter: ", (inputLight) => {
                    switch (inputLight) {
                        case '1':
                            phoneSettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            phoneSettings();
                    }
                });
                break;
            case '6':
                console.log(`
Confirm SIM services actions
1 => Exit`);
                collector.question("Enter: ", (inputConfirmSIM) => {
                    switch (inputConfirmSIM) {
                        case '1':
                            phoneSettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            phoneSettings();
                    }
                });
                break;
            case '7':
                settingsMenu();
                break;
            default:
                console.log("Invalid input.");
                phoneSettings();
        }
    });
}

function securitySettings() {
    console.log(`
Enter
SECURITY SETTINGS MENU
1 => PIN code request
2 => Call barring service
3 => Fixed dialling
4 => Closed user group
5 => Phone security
6 => Change access codes
7 => Exit to menu`);
    collector.question("Enter: ", (inputSecuritySettings) => {
        switch (inputSecuritySettings) {
            case '1':
                console.log(`
PIN code request
1 => Exit`);
                collector.question("Enter: ", (inputPINCode) => {
                    switch (inputPINCode) {
                        case '1':
                            securitySettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            securitySettings();
                    }
                });
                break;
            case '2':
                console.log(`
Call barring service
1 => Exit`);
                collector.question("Enter: ", (inputCallBarring) => {
                    switch (inputCallBarring) {
                        case '1':
                            securitySettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            securitySettings();
                    }
                });
                break;
            case '3':
                console.log(`
Fixed dialling
1 => Exit`);
                collector.question("Enter: ", (inputFixedDialling) => {
                    switch (inputFixedDialling) {
                        case '1':
                            securitySettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            securitySettings();
                    }
                });
                break;
            case '4':
                console.log(`
Closed user group
1 => Exit`);
                collector.question("Enter: ", (inputClosedUser) => {
                    switch (inputClosedUser) {
                        case '1':
                            securitySettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            securitySettings();
                    }
                });
                break;
            case '5':
                console.log(`
Phone security
1 => Exit`);
                collector.question("Enter: ", (inputPhoneSecurity) => {
                    switch (inputPhoneSecurity) {
                        case '1':
                            securitySettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            securitySettings();
                    }
                });
                break;
            case '6':
                console.log(`
Change access codes
1 => Exit`);
                collector.question("Enter: ", (inputChangeAccess) => {
                    switch (inputChangeAccess) {
                        case '1':
                            securitySettings();
                            break;
                        default:
                            console.log("Invalid input.");
                            securitySettings();
                    }
                });
                break;
            case '7':
                settingsMenu();
                break;
            default:
                console.log("Invalid input.");
                securitySettings();
        }
    });
}








function callDivert() {
    console.log(`
Call divert
1 => Exit`);
    collector.question("Enter: ", (inputCallDivert) => {
        switch (inputCallDivert) {
            case '1':
                break;
            default:
                console.log("Invalid input.");
                callDivert();
        }
    });
}


function gamesMenu() {
    console.log(`
Games
1. Snakes
2. Sudoku
3. Exit`);

    collector.question("Enter: ", (inputGames) => {
        switch (inputGames) {
            case '1':
                console.log("Launching Snakes...");
                break;
            case '2':
                console.log("Launching Sudoku...");
                break;
            case '3':
                break;
            default:
                console.log("Invalid input.");
                gamesMenu();
        }
    });
}


function calculator() {
    console.log(`
Calculator
1 => Exit`);
    collector.question("Enter: ", (inputCalc) => {
        switch (inputCalc) {
            case '1':
                break;
            default:
                console.log("Invalid input.");
        }
    });
}


function reminders() {
    console.log(`
Reminders
1 => Exit`);
    collector.question("Enter: ", (inputReminders) => {
        switch (inputReminders) {
            case '1':
                break;
            default:
                console.log("Invalid input.");
                reminders();
        }
    });
}


function clockMenu() {
    console.log(`
Clock Menu
1 => Alarm clock
2 => Clock settings
3 => Date settings
4 => Stopwatch
5 => Countdown timer
6 => Auto update of date and time
7 => Exit to menu`);
    collector.question("Enter: ", (inputClock) => {
        switch (inputClock) {
            case '1':
                console.log("Alarm clock\n1 => Exit");
                collector.question("Enter: ", (inputAlarmClock) => {
                    switch (inputAlarmClock) {
                        case '1':
                            clockMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            clockMenu();
                            break;
                    }
                });
                break;
            case '2':
                console.log("Clock settings\n1 => Exit");
                collector.question("Enter: ", (inputClockSettings) => {
                    switch (inputClockSettings) {
                        case '1':
                            clockMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            clockMenu();
                            break;
                    }
                });
                break;
            case '3':
                console.log("Date settings\n1 => Exit");
                collector.question("Enter: ", (inputDateSettings) => {
                    switch (inputDateSettings) {
                        case '1':
                            clockMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            clockMenu();
                            break;
                    }
                });
                break;
            case '4':
                console.log("Stopwatch\n1 => Exit");
                collector.question("Enter: ", (inputStopwatch) => {
                    switch (inputStopwatch) {
                        case '1':
                            clockMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            clockMenu();
                            break;
                    }
                });
                break;
            case '5':
                console.log("Countdown timer\n1 => Exit");
                collector.question("Enter: ", (inputCountdownTimer) => {
                    switch (inputCountdownTimer) {
                        case '1':
                            clockMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            clockMenu();
                            break;
                    }
                });
                break;
            case '6':
                console.log("Auto update of date and time\n1 => Exit");
                collector.question("Enter: ", (inputAutoUpdate) => {
                    switch (inputAutoUpdate) {
                        case '1':
                            clockMenu();
                            break;
                        default:
                            console.log("Invalid input.");
                            clockMenu();
                            break;
                    }
                });
                break;
            case '7':
                mainMenu();
                break;
            default:
                console.log("Invalid input.");
                clockMenu();
                break;
        }
    });
}


function profiles() {
    console.log(`
Profiles
1 => Exit`);
    collector.question("Enter: ", (inputProfiles) => {
        switch (inputProfiles) {
            case '1':
                break;
            default:
                console.log("Invalid input.");
                profiles();
                break;
        }
    });
}


function simServices() {
    console.log(`
SIM services
1 => Exit`);
    collector.question("Enter: ", (inputSimServices) => {
        switch (inputSimServices) {
            case '1':
                break;
            default:
                console.log("Invalid input.");
                simServices();
                break;
        }
    });
}


mainMenu();
