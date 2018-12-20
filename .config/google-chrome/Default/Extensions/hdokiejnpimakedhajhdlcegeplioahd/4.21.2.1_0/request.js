LPRequest={},function(e){var t,r,s,o,n={},i=function(){for(var e in n)clearTimeout(n[e]);n={}};Topics.get(Topics.REFRESH_DATA).subscribe(i),Topics.get(Topics.CLEAR_DATA).subscribe(i),e.getNewRequestID=(t=0,function(){return++t}),e.makeRequest=(r=function(e,t){return function(){for(var r=0,s=e.length;r<s;++r)e[r].unlock();t&&t.apply(window,arguments)}},s=function(e){if(!e||void 0===e.__raven_xhr)return console.log("Unable to read error response object."),e;var t=e.__raven_xhr;return t.status_code&&429==t.status_code?"throttled":Strings.Vault.UNEXPECTED_ERROR},o=function(e){if(e&&void 0!==e.__raven_xhr){var t,r=e.__raven_xhr.url,s=Strings.translateString("Too many requests were made in a short time. Please try again later."),o="Request to "+r+" was throttled.";(t=r).indexOf("deliver_and_add.php")>-1||t.indexOf("show.php")>-1?Topics.get(Topics.ERROR).publish(s):console.log(o),LPPlatform.logException(o)}else console.log("Request to unknown url was throttled.")},function(t,i){if(i.confirm){var a=i.confirm;return delete i.confirm,a.handler=function(){e.makeRequest(t,i)},void Topics.get(Topics.CONFIRM).publish(a)}i.requestID=e.getNewRequestID();var c,l,u=null;if(LPTools.getOption(i,"showTimeWarning",!0)&&(u=setTimeout(function(){_(Strings.translateString("Sorry, this request is taking longer than normal."))},3e4),n[i.requestID]=u),i.items&&LPTools.getOption(i,"lockItems",!1)){var p=i.items;p instanceof Array||(p=[p]),c=p,l=t,t=function(){for(var e=0,t=c.length;e<t;++e)c[e].lockForUpdate();l.apply(window,arguments)},i.success=r(p,i.success),i.error=r(p,i.error),i.confirm&&(i.confirm.closeHandler=r(p))}var g,d,f,m,R,h,S,T,E=(d=u,f=function(e){try{Topics.get(Topics.REQUEST_SUCCESS).publish(g),d&&(clearTimeout(d),delete n[g.requestID]),e&&Topics.get(Topics.SUCCESS).publish(e)}catch(e){LPPlatform.logException(e)}},(g=i)&&g.success?function(){var e=arguments,t=g.successMessage;e.length>0&&"string"==typeof e[0]&&(t=void 0===t?e[0]:t,e=Array.prototype.slice.call(e,1));try{g.success.apply(window,e)}catch(e){LPPlatform.logException(e)}f(t)}:f),_=(R=u,h=function(e,t){try{switch(R&&(clearTimeout(R),delete n[m.requestID]),"object"==typeof t&&(e=s(t)),Topics.get(Topics.REQUEST_ERROR).publish(m),e){case"throttled":return o(t);case"notoken":e=Strings.translateString("No token was provided. Request could not be completed.");break;case"session_expired":e=Strings.translateString("ErrorSessionMsg");break;case"not_allowed":e=Strings.translateString("Your Shared Folder action failed. Please check your permissions before trying again");break;case"invalidxml":e=Strings.translateString("Invalid XML response.");break;case"invalidjson":e=Strings.translateString("Invalid JSON response.");break;case"offline":e=Strings.translateString("This request cannot be completed because you are currently offline.");break;case"1_to_1_restricted_for_free":LPVault.closeShareDialog(),e=LPVault.openRestrictedSharingDialog();break;case"policy":e=Strings.translateString("Sorry, this operation is not allowed by a policy.");break;case"shouldverifyemail":dialogs.verifyEmail.open({email:bg.get("g_username")}),e=null;break;case void 0:e=Strings.Vault.UNEXPECTED_ERROR}Topics.get(Topics.ERROR).publish(e)}catch(e){LPPlatform.logException(e)}},(m=i)&&m.error?m.shouldverifyemail?void dialogs.verifyEmail.open({email:bg.get("g_username")}):function(e){h(e),m.error()}:h);i.params?S=[{params:i.params,requestArgs:i.requestArgs,success:E,error:_,status:i.status?(T=i,function(e){Topics.get(Topics.REQUEST_STATUS).publish(e,T)}):null}]:((S=LPTools.getOption(i,"parameters",[]))instanceof Array||(S=[S]),S.push(E),S.push(_)),Topics.get(Topics.REQUEST_START).publish(i);try{t.apply(window,S)}catch(e){LPPlatform.logException(e),_(Strings.Vault.UNEXPECTED_ERROR)}}),e.makeDataRequest=function(t,r){e.makeRequest(t,$.extend(!0,r,{dialogRequest:!1}))},e.makeUpdateRequest=function(t,r){e.makeRequest(t,$.extend(!0,r,{requestSuccessOptions:{incrementAccountsVersion:!0}}))},e.makeLockItemUpdateRequest=function(e,t){this.makeUpdateRequest(e,$.extend(t,{lockItems:!0}))}}(LPRequest);
//# sourceMappingURL=sourcemaps/request.js.map
