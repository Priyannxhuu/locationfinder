function searchLocation() {
    const resultContent = document.getElementById("resultContent");
    const ipAddress = document.getElementById("ipInput").value || "check";
  
    fetch(`https://ipapi.co/${ipAddress}/json/`)
      .then((response) => response.json())
      .then((data) => {
        const googleEarthLink = `https://earth.google.com/web/search/${data.latitude},${data.longitude}`;
        resultContent.innerHTML = `
          <p class="card-text text-white ip">IP Address : ${data.ip}</p>
          <p class="card-text text-white location">Location : ${data.city}, ${data.region}, ${data.country_name}</p>
          <p class="card-text text-white latitude">Latitude : ${data.latitude}</p>
          <p class="card-text text-white longitude">Longitude : ${data.longitude}</p>
          <p class="card-text text-white text-center">
            <a class="text-white text-center" href="${googleEarthLink}" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">View on Google Earth</a>
          </p>`;
      })
      .catch((error) => {
        console.error("Error fetching geolocation data:", error);
        resultContent.innerHTML =
          '<p class="card-text text-danger">Error fetching geolocation data. Please try again.</p>';
      });
  }
  