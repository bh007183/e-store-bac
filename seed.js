const db = require("./models");

let products = [
    {
        
        title: `Faction Skis Chapter 1.0 Ski`,
        image:
          "https://content.backcountry.com/images/items/900/FSK/FSK0035/ONECOL.jpg",
        description: `
        Say Goodbye to the same old and say hello to the brand-new Chapter 1.0 With the same energetic poplat core as out freestyle skis, this flat-tailed, progressively shaped ski is manoeuvrable, versatile and is ready for you to start turning it up a gear all over the mountain.`,
        category: "Skiing",
        subCategory: "Alpine",
        price: 463.16,
        quantity: 50,
        tier: "two",
        featured: true,
        updatedBy: "KEVIN L",
        tax: "Taxes not included",
        shipping: "Shipping not included",
        InventoryItem: true,
      },
      {
        
        title: `Salomon X-Race`,
        image:
          "https://content.backcountry.com/images/items/900/FSK/FSK0037/ONECOL.jpg",
        description: `
        The Salomon X-Race Lab is a great ski for racers looking for a nimble ride around the course or aggressive frontside skiers who want performance. The Active Contact Sidewalls rip into firm terrain and deliver a precise edge grip on the frim conditions. A Full length Wood S-Core works with Dual Titanium Laminates to add a damp and stable ride as you are zipping around the gates. Salomon's Pulse Pad Dampening System has elastomer dampeners that absorb vibrations and give you a smoother ride in any type of snow condition. The P69 Race Plate works together with the X-12 Lab Bindings to offer you a stronger power transmission underfoot with added edge grip.`,
        category: "Skiing",
        subCategory: "Cross Country",
        price: 499.95,
        quantity: 50,
        tier: "two",
        featured: true,
        updatedBy: "KEVIN L",
        tax: "Taxes not included",
        shipping: "Shipping not included",
        InventoryItem: true,
      },
      {
        title: `Turbo Levo SL Comp Carbon`,
        image:
          "https://www.bikesonline.com/assets/full/7541222.jpg?20201115174829",
        description: `
        The Turbo Levo SL looks like a Stumpjumper and, out on the trail, feels like one too. That’s no mistake. We aimed to build a Stumpjumper with a bit more boost to it and that’s exactly what you get—a Sidearm chassis with just the right amount of front-to-rear stiffness and 150mm of smooth, custom-tuned FOX rear suspension. To top it all off, we constructed this Turbo Levo SL chassis entirely from our light-yet-strong FACT 11m carbon.
The lightweight SL 1.1 motor doubles your effort with as much as 240 watts of silent and powerful assistance to your pedals. The motor’s responsive torque curve delivers power perfectly in-tune with your normal riding cadence and leaves no resistance when you’re riding without power assistance.
Worried about running out of power? No problem. Turbo Levo SL eats up big miles and long days. And if you’re looking for even more miles, our optional range extender boosts your range by another 50 percent. On top of all that, our Mission Control App can handle battery management automatically, ensuring your battery will last as long as you need it to.
Assist up to 20 mph / 25 km/h`,
        category: "Biking",
        subCategory: "Cross Country",
        price: 8000,
        quantity: 50,
        tier: "two",
        featured: true,
        updatedBy: "KEVIN L",
        tax: "Taxes not included",
        shipping: "Shipping not included",
        InventoryItem: true,
      },
      {
        title: `Zero Gravity Aluminium`,
        image:
          "https://www.bikesonline.com/assets/full/AITPX27CS2M1G1.jpg?20210317031438",
        description: `
        The Turbo Levo SL looks like a Stumpjumper and, out on the trail, feels like one too. That’s no mistake. We aimed to build a Stumpjumper with a bit more boost to it and that’s exactly what you get—a Sidearm chassis with just the right amount of front-to-rear stiffness and 150mm of smooth, custom-tuned FOX rear suspension. To top it all off, we constructed this Turbo Levo SL chassis entirely from our light-yet-strong FACT 11m carbon.
The lightweight SL 1.1 motor doubles your effort with as much as 240 watts of silent and powerful assistance to your pedals. The motor’s responsive torque curve delivers power perfectly in-tune with your normal riding cadence and leaves no resistance when you’re riding without power assistance.
Worried about running out of power? No problem. Turbo Levo SL eats up big miles and long days. And if you’re looking for even more miles, our optional range extender boosts your range by another 50 percent. On top of all that, our Mission Control App can handle battery management automatically, ensuring your battery will last as long as you need it to.
Assist up to 20 mph / 25 km/h`,
        category: "Biking",
        subCategory: "Down hill",
        price: 3333.89,
        quantity: 50,
        tier: "two",
        featured: true,
        updatedBy: "KEVIN L",
        tax: "Taxes not included",
        shipping: "Shipping not included",
        InventoryItem: true,
      },
      {
        title: `Zero Gravity Daypack`,
        image:
          "https://content.backcountry.com/images/items/900/DAK/DAK01MV/VX2.jpg",
        description: `
        Rugged daypack that's got handy storage features for everyday life
Burly ripstop fabric won't wear down after tons of tough trips
Highly water-resistant construction keeps your gear dry in the rain
Padded laptop sleeve keeps your computer secure during your commute
Side stretch pockets hold water bottles and coffee thermoses
Port at the top threads a hydration hose through on hot trail days
Air-mesh back panel helps you stay cool and comfortable as you hike
Daisy chain gear loops let you lash on extra gear and equipment
Item #PAT02ZM`,
        category: "Hiking",
        subCategory: "Day Hiking",
        price: 89.95,
        quantity: 50,
        tier: "two",
        featured: true,
        updatedBy: "KEVIN L",
        tax: "Taxes not included",
        shipping: "Shipping not included",
        InventoryItem: true,
      },
      {
        title: `Zero Gravity Overnight`,
        image:
          "https://content.backcountry.com/images/items/900/DAK/DAK01MV/VX2.jpg",
        description: `
        Fast and light pack to bring along essentials in the mountains
Futura Yoke micro adjusts to help you create a perfect fit
Removable waist belt allows comfortable wear with a harness
3-ZIP design allows rapid access to entire main compartment
Internal hydration sleeve has two side exits for the tube
Front stash pockets hold your extra layers or shoes with ease
2 side stretch pockets accommodate your extra water bottles
Small zippered pockets on waist belt and lid hold small items`,
        category: "Hiking",
        subCategory: "Backpacking",
        price: 209.95,
        quantity: 50,
        tier: "two",
        featured: true,
        updatedBy: "KEVIN L",
        tax: "Taxes not included",
        shipping: "Shipping not included",
        InventoryItem: true,
      },
      {
        title: `NRS Otter 120D Self-Bailing Raft`,
        image:
          "https://dx0dyd9jru7i3.cloudfront.net/85009_01_Blue_120_Left_112219_1000x1000.jpg",
        description: `
        As far as expedition load-haulers go, the Deuter Aircontact 75+10 Pack may fool you into thinking it's a lot smaller than it really is. Built for comfort during high-mileage movement, the Aircontact features Deuter's proprietary Variflex hip belt plush comfort.`,
        category: "Rafting",
        subCategory: "Raft",
        price: 3750.00,
        quantity: 50,
        tier: "two",
        featured: true,
        updatedBy: "KEVIN L",
        tax: "Taxes not included",
        shipping: "Shipping not included",
        InventoryItem: true,
      },
      {
        title: `STAR Raven I Pro Inflatable Kayak`,
        image:
          "https://dx0dyd9jru7i3.cloudfront.net/86254_01_Blue_na_Left_110420_1000x1000.jpg",
        description: `
        The STAR Raven I Pro Inflatable Kayak is a playful performance IK for river running fun. The pronounced rocker rides easily over waves and the included foot braces and thigh straps make the Raven Pro easy to charge more challenging whitewater.
For top performance, the Pro package includes easy-to-install removable foot braces and lace in thigh straps.
Rugged PVC-coated polyester material repels abrasion and slides over rocks with ease.
The PVC-coated drop-stitch floor inflates rock hard for superior wave-punching performance.
38" width gives you extra stability when the water gets rough.
An 18" rocker height helps the Raven climb over waves, while 10.5" tubes and a 4" self-bailing floor provide plenty of flotation.
The high-back kayak seat secures to drain holes in the floor, allowing you to place it just where you need it.
Two stainless steel D-rings let you secure water bottles and other gear.
Bow and stern handles make the Raven easy to carry while also providing extra tie-down points for gear.
Top-quality Leafield™ C7 valves ensure trouble free inflation and deflation.
Also includes carry bag, pump and repair kit.
3-year retail warranty, 2-year commercial.`,
        category: "Rafting",
        subCategory: "Kayak",
        price: 825.00,
        quantity: 50,
        tier: "two",
        featured: true,
        updatedBy: "KEVIN L",
        tax: "Taxes not included",
        shipping: "Shipping not included",
        InventoryItem: true,
      },
     
      
    

]

const seed = () => {
    return db.Products.bulkCreate(products)
}


seed();
module.exports = products