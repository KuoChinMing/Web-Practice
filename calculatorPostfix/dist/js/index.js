class Calculator{constructor(e){this.operationTextElement=e,this.clear()}clear(){this.operation="",this.currentNumber="",this.currentOperator=void 0}delete(){this.operation=this.operation.toString().slice(0,-1)}operationToArray(e){let t="",o=[];for(let r=0;r<e.length;r++)"+-*/%".includes(e[r])?(o.push(t,e[r]),t=""):t+=e[r].toString();return o.push(t),o}toPostfix(e){let t=[];const o=[];for(let r=0;r<e.length;r++)Number(e[r])?t.push(e[r]):0!==o.length&&("*"!==e[r]&&"/"!==e[r]&&"%"!==e[r]||"+"!==o[o.length-1]&&"-"!==o[o.length-1])?(t.push(o.pop()),o.push(e[r])):o.push(e[r]);let r=o.length;for(let e=0;e<r;e++)t.push(o.pop());return t}compute(){const e=this.operationToArray(this.operation),t=this.toPostfix(e);let o=[];for(let e=0;e<t.length;e++)if("+-*/%".includes(t[e])){let r=o.pop(),a=o.pop();switch(t[e]){case"+":o.push(a+r);break;case"-":o.push(a-r);break;case"*":o.push(a*r);break;case"/":o.push(a/r);break;case"%":o.push(a%r)}}else o.push(Number(t[e]));this.operation=o[0].toString()}addNumber(e){"."===e&&this.currentNumber.includes(".")||(this.currentNumber=this.currentNumber.toString()+e.toString(),this.operation=this.operation.toString()+e.toString())}chooseOperator(e){isNaN(this.operation[this.operation.length-1])?(this.operation=this.operation.slice(0,-1),this.operation=this.operation.toString()+e.toString()):this.operation=this.operation.toString()+e.toString(),this.currentNumber=""}getDisplayNumber(e){const t=e.toString();let o,r=parseFloat(t.split(".")[0]),a=t.split(".")[1];return o=isNaN(r)?"":r.toLocaleString("en",{maximumFractionDigits:0}),null!=a?`${o}.${a}`:o}updateDisplay(){this.operationTextElement.innerText=this.operation}}const numberButtons=document.querySelectorAll("[data-number]"),operatorButtons=document.querySelectorAll("[data-operator]"),deleteButton=document.querySelector("[data-delete]"),clearButton=document.querySelector("[data-clear]"),equalsButton=document.querySelector("[data-equals]"),operationTextElement=document.querySelector("[data-operation]"),calculator=new Calculator(operationTextElement);numberButtons.forEach(e=>{e.addEventListener("click",()=>{calculator.addNumber(e.innerText),calculator.updateDisplay()})}),operatorButtons.forEach(e=>{e.addEventListener("click",()=>{calculator.chooseOperator(e.innerText),calculator.updateDisplay()})}),equalsButton.addEventListener("click",()=>{calculator.compute(),calculator.updateDisplay()}),clearButton.addEventListener("click",()=>{calculator.clear(),calculator.updateDisplay()}),deleteButton.addEventListener("click",()=>{calculator.delete(),calculator.updateDisplay()});const numberArr=["1","2","3","4","5","6","7","8","9","0","."];document.addEventListener("keydown",(function(e){numberArr.includes(e.key)?calculator.addNumber(e.key):"Backspace"===e.key?calculator.delete():"-"===e.key||"/"===e.key||e.shiftKey&&("+"===e.key||"*"===e.key||"%"===e.key)?calculator.chooseOperator(e.key):"Enter"===e.key||"="===e.key?calculator.compute():"Escape"===e.key&&calculator.clear(),calculator.updateDisplay()}));const colorThemeSwitch=document.querySelector("#colorTheme"),colorTheme=localStorage.getItem("colorTheme");"dark"===colorTheme?(colorThemeSwitch.checked=!0,document.documentElement.setAttribute("data-theme","dark")):(colorThemeSwitch.checked=!1,document.documentElement.setAttribute("data-theme","light")),colorThemeSwitch.addEventListener("change",(function(){this.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("colorTheme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("colorTheme","light"))}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJbb2JqZWN0IE9iamVjdF0iLCJvcGVyYXRpb25UZXh0RWxlbWVudCIsInRoaXMiLCJjbGVhciIsIm9wZXJhdGlvbiIsImN1cnJlbnROdW1iZXIiLCJjdXJyZW50T3BlcmF0b3IiLCJ1bmRlZmluZWQiLCJ0b1N0cmluZyIsInNsaWNlIiwib3BlcmF0aW9uU3RyaW5nIiwibnVtYmVyIiwib3BlcmF0aW9uQXJyYXkiLCJpIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJwdXNoIiwib3BlcmF0aW9uUG9zdGZpeCIsIm9wZXJhdG9yU3RhY2siLCJOdW1iZXIiLCJwb3AiLCJvcGVyYXRvclN0YWNrSGVpZ2h0Iiwib3BlcmF0aW9uVG9BcnJheSIsInRvUG9zdGZpeCIsInJlc3VsdCIsInNlY29uZE9wZXJhbmQiLCJmaXJzdE9wZXJhbmQiLCJvcGVyYXRvciIsImlzTmFOIiwic3RyaW5nTnVtYmVyIiwiaW50ZWdlckRpc3BsYXkiLCJpbnRlZ2VyRGlnaXRzIiwicGFyc2VGbG9hdCIsInNwbGl0IiwiZGVjaW1hbERpZ2l0cyIsInRvTG9jYWxlU3RyaW5nIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiaW5uZXJUZXh0IiwibnVtYmVyQnV0dG9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9wZXJhdG9yQnV0dG9ucyIsImRlbGV0ZUJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJjbGVhckJ1dHRvbiIsImVxdWFsc0J1dHRvbiIsImNhbGN1bGF0b3IiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZE51bWJlciIsInVwZGF0ZURpc3BsYXkiLCJjaG9vc2VPcGVyYXRvciIsImNvbXB1dGUiLCJkZWxldGUiLCJudW1iZXJBcnIiLCJlIiwia2V5Iiwic2hpZnRLZXkiLCJjb2xvclRoZW1lU3dpdGNoIiwiY29sb3JUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjaGVj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QUVDLEtBQ1EsTUFBVkQsRUFBRUMsS0FDREQsRUFBRUUsV0FBdUIsTUFBVkYsRUFBRUMsS0FBeUIsTUFBVkQsRUFBRUMsS0FBeUIsTUFBVkQsRUFBRUMsS0FFcERYLFdBQVdNLGVBQWVJLEVBQUVDLEtBQ1QsVUFBVkQsRUFBRUMsS0FBNkIsTUFBVkQsRUFBRUMsSUFDaENYLFdBQVdPLFVBQ1EsV0FBVkcsRUFBRUMsS0FDWFgsV0FBVzNDLFFBRWIyQyxXQUFXSyxtQkFHYixNQUFNUSxpQkFBbUJwQixTQUFTSSxjQUFjLGVBQzFDaUIsV0FBYUMsYUFBYUMsUUFBUSxjQUNyQixTQUFmRixZQUNGRCxpQkFBaUJJLFNBQVUsRUFDM0J4QixTQUFTeUIsZ0JBQWdCQyxhQUFhLGFBQWMsVUFHcEROLGlCQUFpQkksU0FBVSxFQUMzQnhCLFNBQVN5QixnQkFBZ0JDLGFBQWEsYUFBYyxVQUV0RE4saUJBQWlCVixpQkFBaUIsVUFBVSxXQUN0Qy9DLEtBQUs2RCxTQUNQeEIsU0FBU3lCLGdCQUFnQkMsYUFBYSxhQUFjLFFBQ3BESixhQUFhSyxRQUFRLGFBQWMsVUFFbkMzQixTQUFTeUIsZ0JBQWdCQyxhQUFhLGFBQWMsU0FDcERKLGFBQWFLLFFBQVEsYUFBYyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHR1dG9yaWFsOiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWo1OXFRN1lXTHh3Jmxpc3Q9TExIa0R3RzcwSVBjZEh4VU9RRVhmWk13XG5jbGFzcyBDYWxjdWxhdG9yIHtcbiAgY29uc3RydWN0b3Iob3BlcmF0aW9uVGV4dEVsZW1lbnQpIHtcbiAgICB0aGlzLm9wZXJhdGlvblRleHRFbGVtZW50ID0gb3BlcmF0aW9uVGV4dEVsZW1lbnQ7XG4gICAgdGhpcy5jbGVhcigpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5vcGVyYXRpb24gPSAnJztcbiAgICB0aGlzLmN1cnJlbnROdW1iZXIgPSAnJztcbiAgICB0aGlzLmN1cnJlbnRPcGVyYXRvciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGRlbGV0ZSgpIHtcbiAgICB0aGlzLm9wZXJhdGlvbiA9IHRoaXMub3BlcmF0aW9uLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpO1xuICB9XG5cbiAgb3BlcmF0aW9uVG9BcnJheShvcGVyYXRpb25TdHJpbmcpIHtcbiAgICBsZXQgbnVtYmVyID0gJyc7XG4gICAgbGV0IG9wZXJhdGlvbkFycmF5ID0gW107XG4gICAgY29uc3Qgb3BlcmF0b3IgPSAnKy0qLyUnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3BlcmF0aW9uU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob3BlcmF0b3IuaW5jbHVkZXMob3BlcmF0aW9uU3RyaW5nW2ldKSkge1xuICAgICAgICBvcGVyYXRpb25BcnJheS5wdXNoKG51bWJlciwgb3BlcmF0aW9uU3RyaW5nW2ldKTtcbiAgICAgICAgbnVtYmVyID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1iZXIgKz0gb3BlcmF0aW9uU3RyaW5nW2ldLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICAgIG9wZXJhdGlvbkFycmF5LnB1c2gobnVtYmVyKTtcbiAgICByZXR1cm4gb3BlcmF0aW9uQXJyYXk7XG4gIH1cblxuICB0b1Bvc3RmaXgob3BlcmF0aW9uQXJyYXkpIHtcbiAgICBsZXQgb3BlcmF0aW9uUG9zdGZpeCA9IFtdO1xuICAgIGNvbnN0IG9wZXJhdG9yU3RhY2sgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wZXJhdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIU51bWJlcihvcGVyYXRpb25BcnJheVtpXSkpIHtcbiAgICAgICAgLy8gb3BlcmF0aW9uW2ldIGlzIGEgb3BlcmF0b3JcbiAgICAgICAgaWYgKG9wZXJhdG9yU3RhY2subGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKG9wZXJhdGlvbkFycmF5W2ldID09PSAnKicgfHxcbiAgICAgICAgICAgICAgb3BlcmF0aW9uQXJyYXlbaV0gPT09ICcvJyB8fFxuICAgICAgICAgICAgICBvcGVyYXRpb25BcnJheVtpXSA9PT0gJyUnKSAmJlxuICAgICAgICAgICAgKG9wZXJhdG9yU3RhY2tbb3BlcmF0b3JTdGFjay5sZW5ndGggLSAxXSA9PT0gJysnIHx8XG4gICAgICAgICAgICAgIG9wZXJhdG9yU3RhY2tbb3BlcmF0b3JTdGFjay5sZW5ndGggLSAxXSA9PT0gJy0nKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgb3BlcmF0b3JTdGFjay5wdXNoKG9wZXJhdGlvbkFycmF5W2ldKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3BlcmF0aW9uUG9zdGZpeC5wdXNoKG9wZXJhdG9yU3RhY2sucG9wKCkpO1xuICAgICAgICAgICAgb3BlcmF0b3JTdGFjay5wdXNoKG9wZXJhdGlvbkFycmF5W2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3BlcmF0b3JTdGFjay5wdXNoKG9wZXJhdGlvbkFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gb3BlcmF0b2luW2ldIGlzIGEgb3BlcmFuZFxuICAgICAgICBvcGVyYXRpb25Qb3N0Zml4LnB1c2gob3BlcmF0aW9uQXJyYXlbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgb3BlcmF0b3JTdGFja0hlaWdodCA9IG9wZXJhdG9yU3RhY2subGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3BlcmF0b3JTdGFja0hlaWdodDsgaSsrKSB7XG4gICAgICBvcGVyYXRpb25Qb3N0Zml4LnB1c2gob3BlcmF0b3JTdGFjay5wb3AoKSk7XG4gICAgfVxuICAgIHJldHVybiBvcGVyYXRpb25Qb3N0Zml4O1xuICB9XG5cbiAgY29tcHV0ZSgpIHtcbiAgICBjb25zdCBvcGVyYXRpb25BcnJheSA9IHRoaXMub3BlcmF0aW9uVG9BcnJheSh0aGlzLm9wZXJhdGlvbik7XG4gICAgY29uc3Qgb3BlcmF0aW9uUG9zdGZpeCA9IHRoaXMudG9Qb3N0Zml4KG9wZXJhdGlvbkFycmF5KTtcbiAgICBjb25zdCBvcGVyYXRvciA9ICcrLSovJSc7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3BlcmF0aW9uUG9zdGZpeC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9wZXJhdG9yLmluY2x1ZGVzKG9wZXJhdGlvblBvc3RmaXhbaV0pKSB7XG4gICAgICAgIGxldCBzZWNvbmRPcGVyYW5kID0gcmVzdWx0LnBvcCgpO1xuICAgICAgICBsZXQgZmlyc3RPcGVyYW5kID0gcmVzdWx0LnBvcCgpO1xuICAgICAgICBzd2l0Y2ggKG9wZXJhdGlvblBvc3RmaXhbaV0pIHtcbiAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZpcnN0T3BlcmFuZCArIHNlY29uZE9wZXJhbmQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICByZXN1bHQucHVzaChmaXJzdE9wZXJhbmQgLSBzZWNvbmRPcGVyYW5kKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZmlyc3RPcGVyYW5kICogc2Vjb25kT3BlcmFuZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZpcnN0T3BlcmFuZCAvIHNlY29uZE9wZXJhbmQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICByZXN1bHQucHVzaChmaXJzdE9wZXJhbmQgJSBzZWNvbmRPcGVyYW5kKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChOdW1iZXIob3BlcmF0aW9uUG9zdGZpeFtpXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9wZXJhdGlvbiA9IHJlc3VsdFswXS50b1N0cmluZygpO1xuICB9XG5cbiAgYWRkTnVtYmVyKG51bWJlcikge1xuICAgIGlmIChudW1iZXIgPT09ICcuJyAmJiB0aGlzLmN1cnJlbnROdW1iZXIuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnROdW1iZXIgPSB0aGlzLmN1cnJlbnROdW1iZXIudG9TdHJpbmcoKSArIG51bWJlci50b1N0cmluZygpO1xuICAgIHRoaXMub3BlcmF0aW9uID0gdGhpcy5vcGVyYXRpb24udG9TdHJpbmcoKSArIG51bWJlci50b1N0cmluZygpO1xuICB9XG5cbiAgY2hvb3NlT3BlcmF0b3Iob3BlcmF0b3IpIHtcbiAgICBpZiAoIWlzTmFOKHRoaXMub3BlcmF0aW9uW3RoaXMub3BlcmF0aW9uLmxlbmd0aCAtIDFdKSkge1xuICAgICAgLy8gdGhlIGxhc3QgZWxlbWVudCBpcyBhIG51bWJlclxuICAgICAgdGhpcy5vcGVyYXRpb24gPSB0aGlzLm9wZXJhdGlvbi50b1N0cmluZygpICsgb3BlcmF0b3IudG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhlIGxhc3QgZWxlbWVudCBpcyBvcGVyYXRvclxuICAgICAgdGhpcy5vcGVyYXRpb24gPSB0aGlzLm9wZXJhdGlvbi5zbGljZSgwLCAtMSk7XG4gICAgICB0aGlzLm9wZXJhdGlvbiA9IHRoaXMub3BlcmF0aW9uLnRvU3RyaW5nKCkgKyBvcGVyYXRvci50b1N0cmluZygpO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnROdW1iZXIgPSAnJztcbiAgfVxuXG4gIGdldERpc3BsYXlOdW1iZXIobnVtYmVyKSB7XG4gICAgY29uc3Qgc3RyaW5nTnVtYmVyID0gbnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgbGV0IGludGVnZXJEaWdpdHMgPSBwYXJzZUZsb2F0KHN0cmluZ051bWJlci5zcGxpdCgnLicpWzBdKTtcbiAgICBsZXQgZGVjaW1hbERpZ2l0cyA9IHN0cmluZ051bWJlci5zcGxpdCgnLicpWzFdO1xuICAgIGxldCBpbnRlZ2VyRGlzcGxheTtcbiAgICBpZiAoaXNOYU4oaW50ZWdlckRpZ2l0cykpIHtcbiAgICAgIGludGVnZXJEaXNwbGF5ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGludGVnZXJEaXNwbGF5ID0gaW50ZWdlckRpZ2l0cy50b0xvY2FsZVN0cmluZygnZW4nLCB7XG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGVjaW1hbERpZ2l0cyAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYCR7aW50ZWdlckRpc3BsYXl9LiR7ZGVjaW1hbERpZ2l0c31gO1xuICAgIH1cbiAgICByZXR1cm4gaW50ZWdlckRpc3BsYXk7XG4gIH1cblxuICB1cGRhdGVEaXNwbGF5KCkge1xuICAgIHRoaXMub3BlcmF0aW9uVGV4dEVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5vcGVyYXRpb247XG4gIH1cbn1cblxuY29uc3QgbnVtYmVyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW51bWJlcl0nKTtcbmNvbnN0IG9wZXJhdG9yQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9wZXJhdG9yXScpO1xuY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZGVsZXRlXScpO1xuY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jbGVhcl0nKTtcbmNvbnN0IGVxdWFsc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVxdWFsc10nKTtcbmNvbnN0IG9wZXJhdGlvblRleHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtb3BlcmF0aW9uXScpO1xuXG5jb25zdCBjYWxjdWxhdG9yID0gbmV3IENhbGN1bGF0b3Iob3BlcmF0aW9uVGV4dEVsZW1lbnQpO1xuXG5udW1iZXJCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNhbGN1bGF0b3IuYWRkTnVtYmVyKGJ1dHRvbi5pbm5lclRleHQpO1xuICAgIGNhbGN1bGF0b3IudXBkYXRlRGlzcGxheSgpO1xuICB9KTtcbn0pO1xuXG5vcGVyYXRvckJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2FsY3VsYXRvci5jaG9vc2VPcGVyYXRvcihidXR0b24uaW5uZXJUZXh0KTtcbiAgICBjYWxjdWxhdG9yLnVwZGF0ZURpc3BsYXkoKTtcbiAgfSk7XG59KTtcblxuZXF1YWxzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjYWxjdWxhdG9yLmNvbXB1dGUoKTtcbiAgY2FsY3VsYXRvci51cGRhdGVEaXNwbGF5KCk7XG59KTtcblxuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNhbGN1bGF0b3IuY2xlYXIoKTtcbiAgY2FsY3VsYXRvci51cGRhdGVEaXNwbGF5KCk7XG59KTtcblxuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjYWxjdWxhdG9yLmRlbGV0ZSgpO1xuICBjYWxjdWxhdG9yLnVwZGF0ZURpc3BsYXkoKTtcbn0pO1xuXG5jb25zdCBudW1iZXJBcnIgPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzAnLCAnLiddO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKG51bWJlckFyci5pbmNsdWRlcyhlLmtleSkpIHtcbiAgICBjYWxjdWxhdG9yLmFkZE51bWJlcihlLmtleSk7XG4gIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdCYWNrc3BhY2UnKSB7XG4gICAgY2FsY3VsYXRvci5kZWxldGUoKTtcbiAgfSBlbHNlIGlmIChcbiAgICBlLmtleSA9PT0gJy0nIHx8XG4gICAgZS5rZXkgPT09ICcvJyB8fFxuICAgIChlLnNoaWZ0S2V5ICYmIChlLmtleSA9PT0gJysnIHx8IGUua2V5ID09PSAnKicgfHwgZS5rZXkgPT09ICclJykpXG4gICkge1xuICAgIGNhbGN1bGF0b3IuY2hvb3NlT3BlcmF0b3IoZS5rZXkpO1xuICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5ID09PSAnPScpIHtcbiAgICBjYWxjdWxhdG9yLmNvbXB1dGUoKTtcbiAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICBjYWxjdWxhdG9yLmNsZWFyKCk7XG4gIH1cbiAgY2FsY3VsYXRvci51cGRhdGVEaXNwbGF5KCk7XG59KTtcblxuY29uc3QgY29sb3JUaGVtZVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2xvclRoZW1lJyk7XG5jb25zdCBjb2xvclRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbG9yVGhlbWUnKTtcbmlmIChjb2xvclRoZW1lID09PSAnZGFyaycpIHtcbiAgY29sb3JUaGVtZVN3aXRjaC5jaGVja2VkID0gdHJ1ZTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdkYXJrJyk7XG59IGVsc2Uge1xuICAvLyBpZiBjb2xvclRoZW1lID09PSBudWxsIHdpbGwgZ29lcyBoZXJlXG4gIGNvbG9yVGhlbWVTd2l0Y2guY2hlY2tlZCA9IGZhbHNlO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XG59XG5jb2xvclRoZW1lU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdkYXJrJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbG9yVGhlbWUnLCAnZGFyaycpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnbGlnaHQnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29sb3JUaGVtZScsICdsaWdodCcpO1xuICB9XG59KTtcbiJdfQ==