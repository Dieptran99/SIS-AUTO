INIT:
javascript:MA=["112111","112107","112053","112089","112084","112079","112097","688499","690090","690042","688565"]; i=-1;

AUTO:
javascript: i++; CL=document.getElementById("ctl00_ctl00_ASPxSplitter1_Content_ContentSplitter_MainContent_ASPxCallbackPanel1_btDirectClassRegister_CD"); DC=document.getElementById("ctl00_ctl00_ASPxSplitter1_Content_ContentSplitter_MainContent_ASPxCallbackPanel1_tbDirectClassRegister_I"); DC.value=MA[i]; CL.click();

SUBMIT:
javascript:document.getElementById("ctl00_ctl00_ASPxSplitter1_Content_ContentSplitter_MainContent_ASPxCallbackPanel1_btSendRegister_CD").click();
