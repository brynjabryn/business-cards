(function businessCard($){
  var body = $("body"),
  		overlay = body.find(".overlay")[0],
  		cardOpen = body.find("button[class*='bcard-open']")[0],
      cardModal = body.find("#cardModal")[0],
      cardContent = $(cardModal).find("#cardContent")[0],
      cardClose = body.find("#cardClose")[0],
  		docData = body.find("span[itemtype*='http://schema.org/LocalBusiness']"),
  		name = docData.find("[itemprop*='name']").html(),
      employeeName = docData.find("[data-bcard*='employee-name']").html(),
      address = docData.find("[itemtype*='http://schema.org/PostalAddress']"),
      streetAddress = address.find("[itemprop*='streetAddress']").html(),
      addressLocality = address.find("[itemprop*='addressLocality']").html(),
      addressRegion = address.find("[itemprop*='addressRegion']").html(),
      postalCode = address.find("[itemprop*='postalCode']").html(),
      telephone = docData.find("[itemprop*='telephone']").html(),
      email = docData.find("[itemprop*='email']").html(),
      url = docData.find("[itemprop*='url']").html(),
      description = body.find("[data-bcard*='description']").html(),
      logo = body.find("[data-bcard*='logo']").attr("src"),
      background = body.find("[name*='bcard-background']").attr("content"),
      primaryColor = body.find("[name*='bcard-primary-color']").attr("content"),
      secondaryColor = body.find("[name*='bcard-secondary-color']").attr("content"),
      logoPlacement = body.find("[name*='bcard-logo-placement']").attr("content"),
      textPlacement = body.find("[name*='bcard-text-placement']").attr("content"),
      font = body.find("[name*='bcard-font']").attr("content"),
      fontSize = body.find("[name*='bcard-font-size']").attr("content");
  
	var cardData = {
      name: name,
      employeeName: employeeName,
      streetAddress: streetAddress,
      addressLocality: addressLocality,
      addressRegion: addressRegion,
      postalCode: postalCode,
      telephone: telephone,
      email: email,
      url: url,
      description: description,
      logo: logo,
      background: background,
      primaryColor: primaryColor,
      secondaryColor: secondaryColor,
      logoPlacement: logoPlacement,
      textPlacement: textPlacement,
      font: font,
      fontSize: fontSize
  }
  
  console.log("Card Data: ");
  console.log(cardData);
	
  if(cardData) {
		addCardData(cardData);
  } else {
    console.error("No card data available.");
  }
  
  $(cardOpen).click(function showCard(cardData) {
  		$(overlay).removeClass("hide").addClass("show");
    	$(cardModal).removeClass("hide").addClass("show");
	});
  
  $(cardClose).click(function closeCard() {
  		$(overlay).addClass("hide").removeClass("show");
    	$(cardModal).addClass("hide").removeClass("show");
	});
  
  function addCardData(data) {
  		if(data.name !== "" && data.name !== null) {
        $(cardContent).append('<h1 class="name">' + data.name + '</h1>');
      } else {
        console.log("No business name available.");
      }

      if(data.employeeName !== "" && data.employeeName !== null) {
        $(cardContent).append('<h2 class="employee-name">' + data.employeeName + '</h2>');
      } else {
        console.log ("No employee name available.");
      }
      
      if((data.streetAddress !== "" && data.streetAddress !== null) &&
      (data.addressLocality !== "" && data.addressLocality !== null) &&
      (data.addressRegion !== "" && data.addressRegion !== null) &&
      (data.postalCode !== "" && data.postalCode !== null)) {
      	$(cardContent).append(
        '<div class="address">' + 
        '<span class="streetAddress">' + data.streetAddress + '</span>' +
        '<span class="addressLocality">' + data.addressLocality + ', ' + '</span>' + 
        '<span class="addressRegion">' + data.addressRegion + '</span>' + 
        '<span class="postalCode">' + data.postalCode + '</span>' +
        '</div>');
      } else {
        console.log("No address available.");
      }
      
      if(data.telephone !== "" && data.telephone !== null) {
        $(cardContent).append('<h2 class="employee-name">' + data.employeeName + '</h2>');
      } else {
        console.log ("No employee name available.");
      }
      
      if(data.email !== "" && data.email !== null) {
        $(cardContent).append('<h2 class="employee-name">' + data.employeeName + '</h2>');
      } else {
        console.log ("No employee name available.");
      }
      
      if(data.url !== "" && data.url !== null) {
        $(cardContent).append('<h2 class="employee-name">' + data.employeeName + '</h2>');
      } else {
        console.log ("No employee name available.");
      }
      
      if(data.description !== "" && data.description !== null) {
        $(cardContent).append('<h2 class="employee-name">' + data.employeeName + '</h2>');
      } else {
        console.log ("No employee name available.");
      }
      
      if(data.logo !== "" && data.logo !== null) {
        $(cardContent).append('<h2 class="employee-name">' + data.employeeName + '</h2>');
      } else {
        console.log ("No employee name available.");
      }
      
      
      
      
      
      
      
      background
      primaryColor
      secondaryColor
      logoPlacement
      textPlacement
      font
      fontSize
  }
  
})(jQuery);


  

