*** Settings ***
Documentation      Suite description
Library            Selenium2Library
Library            Collections
#Resource            resource.robot
#Variables            variables.py
#Resource            variables.robot    #Stylers standard
Suite Setup        User Navigate the Page
Test Setup          Clear the Calc
#Suite Teardown     Close Browser
Test Template       Test Calculator with Keyboard
#Test Template      Flexible Calculator with Keyboard

*** Variables ***
${HOME}     file:///home/mob/Development/Calculator/index.html
${BROWSER}  Chrome

#SELECTORS:
${DISPLAY}           css=#display
${BODY}              css=body

*** Test Cases ***
#Name of Test Case      n1  op  n2  res
2+3=5                   2   +   3   5
3+4=7                   3   +   4   7
Flexible1               12  +   23  -   5   *   2   60
    [Template]          Flexible Calculator with Buttons
Flexible2               4   /   2   -   10  *   4   -32
    [Template]          Flexible Calculator with Keyboard
Flexible3               2+3+3+2     10
    [Template]          Flexible Calculator with Keyboard

*** Keywords ***
User Navigate the Page
    Open Browser    ${HOME}     ${BROWSER}
    #Maximize Browser Window
    Set Selenium Speed  0.2

Clear the Calc
    #Press Delete
    Press Key       ${BODY}     \\127

Test Calculator with Keyboard
    [Arguments]     ${num1}     ${op}   ${num2}     ${result}
    Press Key       ${BODY}     ${num1}
    Press Key       ${BODY}     ${op}
    Press Key       ${BODY}     ${num2}
    #Press Enter
    Press Key       ${BODY}     \\13

    Element Text Should Be  ${DISPLAY}  ${result}

Flexible Calculator with Keyboard
    [Arguments]     @{arguments}
    ${length}=      Get Length  ${arguments}
    ${last_index}=  Evaluate    ${length} - 1

    ${result}=      Remove From List    ${arguments}    ${last_index}

    :FOR    ${arg}  IN  @{arguments}
    \       Press Key       ${BODY}     ${arg}

    #Press Enter
    Press Key       ${BODY}     \\13
    Element Text Should Be  ${DISPLAY}  ${result}

Flexible Calculator with Buttons
    [Arguments]     @{arguments}
    ${length}=      Get Length  ${arguments}
    ${last_index}=  Evaluate    ${length} - 1

    ${result}=      Remove From List    ${arguments}    ${last_index}

    :FOR    ${arg}  IN  @{arguments}
    #\       Press Key       ${BODY}     ${arg}
    \       Press Buttons   ${arg}

    #Press Enter
    Press Key       ${BODY}     \\13
    Element Text Should Be  ${DISPLAY}  ${result}

Press Buttons
    [Arguments]     ${value}
    #${length}=      Get Length  ${value}
    ${list}=        Convert To List     ${value}

    #:FOR    ${i}  IN RANGE  ${length}
    #\       ${sel}=     Convert To String   css=input[value='']

    :FOR    ${arg}  IN  @{list}
    #\   Log     ${arg}      WARN
    \       ${sel}=     Convert To String   css=input[value='${arg}']
    \       Wait Until Page Contains Element    ${sel}
    \       Click Element   ${sel}