const puppeteer = require('puppeteer')
async function scrap() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://xoso.me/xsmb-sxmb-xstd-xshn-kqxsmb-ket-qua-xo-so-mien-bac.html')

    let ele1 = await page.waitForSelector('#load_kq_mb_0 > div.one-city > table > tbody > tr.db > td.v-giai.number > span')
    let txt1 = await page.evaluate((ele1) => ele1.textContent, ele1)
    // console.log('Prize_DB : >> ', txt1);

    let ele2 = await page.waitForSelector('#load_kq_mb_0 > div.one-city > table > tbody > tr:nth-child(3) > td.v-giai.number > span')
    let txt2 = await page.evaluate((ele2) => ele2.textContent, ele2)
    // console.log('Prize 1 : >> ', txt2);

    let arr_prize2 = []

    for (let i = 0; i < 2; i++) {
        let ele3 = await page.waitForSelector(`#load_kq_mb_0 > div.one-city > table > tbody > tr:nth-child(4) > td.v-giai.number > span.v-g2-${i}`)
        let txt3 = await page.evaluate((ele3) => ele3.textContent, ele3)
        arr_prize2.push(txt3)
        // console.log(`Prize 2_${i} : >> `, arr_prize2[i]);
    }

    let arr_prize3 = []

    for (let i = 0; i < 6; i++) {
        let ele4 = await page.waitForSelector(`#load_kq_mb_0 > div.one-city > table > tbody > tr:nth-child(5) > td.v-giai.number > span.v-g3-${i}`)
        let txt4 = await page.evaluate((ele4) => ele4.textContent, ele4)
        arr_prize3.push(txt4)
        //console.log(`Prize 3_${i} : >> `, arr_prize3[i]);
    }

    let arr_prize4 = []

    for (let i = 0; i < 4; i++) {
        let ele5 = await page.waitForSelector(`#load_kq_mb_0 > div.one-city > table > tbody > tr:nth-child(6) > td.v-giai.number > span.v-g4-${i}`)
        let txt5 = await page.evaluate((ele5) => ele5.textContent, ele5)
        arr_prize4.push(txt5)
    }

    let arr_prize5 = []

    for (let i = 0; i < 6; i++) {
        let ele6 = await page.waitForSelector(`#load_kq_mb_0 > div.one-city > table > tbody > tr:nth-child(7) > td.v-giai.number > span.v-g5-${i}`)
        let txt6 = await page.evaluate((ele6) => ele6.textContent, ele6)
        arr_prize5.push(txt6)
    }

    let arr_prize6 = []

    for (let i = 0; i < 3; i++) {
        let ele7 = await page.waitForSelector(`#load_kq_mb_0 > div.one-city > table > tbody > tr:nth-child(8) > td.v-giai.number > span.v-g6-${i}`)
        let txt7 = await page.evaluate((ele7) => ele7.textContent, ele7)
        arr_prize6.push(txt7)
    }
    let arr_prize7 = []

    for (let i = 0; i < 4; i++) {
        let ele8 = await page.waitForSelector(`#load_kq_mb_0 > div.one-city > table > tbody > tr.g7 > td.v-giai.number > span.v-g7-${i}`)
        let txt8 = await page.evaluate((ele8) => ele8.textContent, ele8)
        arr_prize7.push(txt8)
    }

    let objData = [
        {
            Prize_DB: txt1
        },
        {
            Prize_1: txt2
        },
        {
            Prize_2_0: arr_prize2[0],
            Prize_2_1: arr_prize2[1]
        },
        {
            Prize_3_0: arr_prize3[0],
            Prize_3_1: arr_prize3[1],
            Prize_3_2: arr_prize3[2],
            Prize_3_3: arr_prize3[3],
            Prize_3_4: arr_prize3[4],
            Prize_3_5: arr_prize3[5],
        },
        {
            Prize_4_0: arr_prize4[0],
            Prize_4_1: arr_prize4[1],
            Prize_4_2: arr_prize4[2],
            Prize_4_3: arr_prize4[3],
        },
        {
            Prize_5_0: arr_prize5[0],
            Prize_5_1: arr_prize5[1],
            Prize_5_2: arr_prize5[2],
            Prize_5_3: arr_prize5[3],
            Prize_5_4: arr_prize5[4],
            Prize_5_5: arr_prize5[5],
        },
        {
            Prize_6_0: arr_prize6[0],
            Prize_6_1: arr_prize6[1],
            Prize_6_2: arr_prize6[2],
        },
        {
            Prize_7_0: arr_prize7[0],
            Prize_7_1: arr_prize7[1],
            Prize_7_2: arr_prize7[2],
            Prize_7_3: arr_prize7[3],
        }
    ]

    // const result = JSON.stringify(objData)

    browser.close()
    return objData
}
module.exports = {
    scrap
}