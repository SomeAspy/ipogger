// Copyright (c) 2021 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

(async () => {
    let ip = await (await fetch(`https://ifconfig.me/ip`)).text();
    console.log(ip);
    document.getElementById("ip").innerHTML = ip;
  })(); // Kinda ugly but that's the only thing you got if you don't have TLA
