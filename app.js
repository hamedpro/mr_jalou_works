var el = (id) => document.getElementById(id);
var render_page_1 = ({
	compressor_number, //number 
	wifi_is_connected, //boolean
	home_temperature, //number
	set_point_max,  //number
	set_point_min,  //number
	outlet_water_temperature, //number
	eco_button_onclick, //function 
	auto_s_f_onclick, //function 
	menu_button_onclick, //function 
	start_button_onclick, //function 
	home_button_onclick, //function 
	compressor_button_onclick, //function 
	has_error, //boolean
	error_number, //number
	plus_button_onclick, //function 
	minus_button_onclick, //function 
}) => {
	el("home_tempreature").innerHTML = home_temperature;
	el("compressor_number").innerHTML = compressor_number;
	el("outlet_water_temperature").innerHTML = outlet_water_temperature;
	el("outlet_water_temperature_2").innerHTML = outlet_water_temperature;
	el("progressbar_inner_element").style.width =
		((outlet_water_temperature - set_point_min) / (set_point_max - set_point_min)) * 100 + "%";
	el("minus_button").onclick = minus_button_onclick;
	el("plus_button").onclick = plus_button_onclick;
	el("eco_button").onclick = eco_button_onclick;
	el("auto_f_s_button").onclick = auto_s_f_onclick;
	if (has_error) {
		el("error_indicator").classList.remove("hidden");
		el("error_number").innerHTML = error_number;
	} else {
		el("error_indicator").classList.add("hidden");
	}
	el("wifi_icon_container").src = (wifi_is_connected ? "./images/wifi.svg" : "./images/wifi-off.svg")
	el("menu_button").onclick = menu_button_onclick;
	el("start_button").onclick = start_button_onclick;
	el("home_button").onclick = home_button_onclick;
	el("compressor_icon").onclick = compressor_button_onclick;
};
var render_page_2 = (box_values, fan_rpm) => {
	//box values should be an array 
    box_values.forEach((box_value, index) => {
        console.log(box_value)
		document.querySelector(`.box_${index + 1}`).innerHTML = box_value;
    });
	el("fan_icon").style.animationPlayState = "running"
	el("fan_icon").style.animationDuration = Math.round(60000 / fan_rpm) + "ms"
};
//window.render_page_2(Array.from({length: 16}, (_, i) => i + 1),30)
render_page_1({
	compressor_number: "001",
	wifi_is_connected: false,
	home_temperature: '002',
	set_point_max: 100,
	set_point_min: 0,
	outlet_water_temperature: 50,
	eco_button_onclick: () => { alert('eco button') },
	auto_s_f_onclick: () => { alert('auto f s') },
	menu_button_onclick: () => { alert('menu button onclick') },
	start_button_onclick: () => { alert('start button onclick') },
	home_button_onclick: () => { alert('home button onclick') },
	compressor_button_onclick: () => { alert('compressor button onclick') },
	has_error: true,
	error_number: 003,
	plus_button_onclick: () => alert('plus button onclick '),
	minus_button_onclick : ()=>{alert('minus button onclick')}
})