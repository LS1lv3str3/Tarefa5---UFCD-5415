    // Inicializar o slider
    $("#date-slider").slider({
        orientation: "horizontal",
        range:"min",
        min:1,
        max: 6,
        value: 1,
        slide: function(event, ui) {
            changeSlider(ui.value);
        }
    });

    let sliderCheck = null;
    let sliderbtnCheck = null;
    
    function changeSlider(opc){
        let sliderInfo;
        sliderInfo = $(`#slider_${opc}`);

        let btn = document.getElementById(`btn${opc}`);

        if (sliderCheck && sliderCheck.is(sliderInfo)) {
            sliderInfo.toggle();
        } 
    
        else {
            if (sliderCheck) {
                sliderCheck.hide();
                
            }
            sliderInfo.show();
            sliderCheck = sliderInfo;
            btn.style.backgroundColor = '#344e41';
            btn.style.color = '#fff'
            sliderbtnCheck = btn;
        }
    
        $("#date-slider").slider("value", opc);
        
     
        // handleClick();
    }
