import Mock from 'mockjs'
Mock.mock('/api/banner', 'get', {
    "code":0,
    "msg": "",
    "data": [
        {
            id: "1",
            midimg: "http://img.laomaotaopan.com/d/file/pic_zt/20210118/2016921174555909.jpg",
            bigimg: "http://img.laomaotaopan.com/d/file/pic_zt/20210118/2016921174555909.jpg",
            title: "富士山",
            text: "一股凛冽的寒意，让我从假寐状态中彻底清醒。"
        },
        {
            id: "2",
            midimg: "http://pic1.win4000.com/wallpaper/1/5822eedc9f652.jpg",
            bigimg: "http://pic1.win4000.com/wallpaper/1/5822eedc9f652.jpg",
            title: "极夜",
            text: "偶尔也会呈现艳丽的洪紫色,曼妙多姿又神秘难测."
        },
        {
            id: "3",
            midimg: "http://pic1.win4000.com/wallpaper/2019-06-13/5d01f28aa8afa.jpg",
            bigimg: "http://pic1.win4000.com/wallpaper/2019-06-13/5d01f28aa8afa.jpg",
            title: "仙境",
            text: "灰色的浓雾弥漫了大地,好像在掩蔽着自然界所起的变化的神秘一样。"
        },
    ]
})