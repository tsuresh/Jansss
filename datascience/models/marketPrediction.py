import pandas as pd


class MarketPrediction:

    def __init__(self):
        self.df = pd.read_csv("datasets/final.csv")
        self.df = pd.DataFrame(self.df)

    def get_categories(self):
        return ['electronics.smartphone', 'appliances.sewing_machine',
                'appliances.kitchen.washer', 'computers.notebook',
                'appliances.kitchen.dishwasher', 'furniture.kitchen.chair',
                'electronics.audio.headphone', 'appliances.environment.vacuum',
                'appliances.environment.water_heater', 'electronics.clocks',
                'electronics.video.tv', 'apparel.tshirt',
                'construction.tools.drill', 'auto.accessories.compressor',
                'computers.components.motherboard',
                'computers.peripherals.printer', 'auto.accessories.player',
                'accessories.bag', 'appliances.kitchen.refrigerators',
                'computers.components.videocards', 'electronics.audio.subwoofer',
                'construction.tools.welding', 'construction.tools.saw',
                'furniture.kitchen.table', 'apparel.shoes',
                'construction.tools.light', 'apparel.shirt',
                'construction.tools.painting', 'appliances.personal.massager',
                'computers.peripherals.keyboard', 'kids.toys',
                'electronics.tablet', 'appliances.kitchen.hood', 'kids.dolls',
                'apparel.trousers', 'furniture.bathroom.bath', 'kids.carriage',
                'computers.desktop', 'sport.bicycle', 'electronics.telephone',
                'furniture.bedroom.bed', 'computers.components.cpu',
                'auto.accessories.videoregister', 'apparel.costume',
                'apparel.shoes.keds', 'appliances.environment.air_conditioner',
                'appliances.kitchen.blender',
                'electronics.audio.music_tools.piano', 'apparel.shoes.moccasins',
                'apparel.underwear', 'furniture.living_room.cabinet',
                'appliances.personal.scales', 'electronics.audio.acoustic',
                'auto.accessories.winch', 'electronics.camera.video',
                'accessories.wallet', 'appliances.kitchen.microwave',
                'computers.components.cooler', 'appliances.kitchen.meat_grinder',
                'apparel.dress', 'appliances.kitchen.oven', 'apparel.jumper',
                'computers.peripherals.mouse', 'computers.peripherals.monitor',
                'computers.components.memory', 'appliances.iron',
                'furniture.living_room.sofa', 'construction.tools.pump',
                'auto.accessories.alarm', 'appliances.kitchen.coffee_machine',
                'kids.skates', 'construction.tools.generator',
                'appliances.kitchen.mixer', 'furniture.bedroom.pillow',
                'sport.trainer', 'furniture.bathroom.toilet',
                'apparel.shoes.ballet_shoes', 'computers.components.power_supply',
                'electronics.video.projector', 'furniture.living_room.chair',
                'construction.components.faucet', 'sport.snowboard',
                'appliances.kitchen.hob', 'auto.accessories.radar',
                'appliances.kitchen.grill', 'appliances.kitchen.kettle',
                'appliances.personal.hair_cutter', 'appliances.ironing_board',
                'appliances.environment.air_heater', 'auto.accessories.parktronic',
                'kids.fmcg.diapers', 'electronics.audio.microphone',
                'appliances.kitchen.steam_cooker', 'medicine.tools.tonometer',
                'appliances.kitchen.toster', 'computers.components.hdd',
                'appliances.kitchen.juicer', 'computers.ebooks',
                'country_yard.cultivator', 'appliances.kitchen.coffee_grinder',
                'furniture.universal.light', 'sport.ski', 'apparel.shoes.slipons',
                'apparel.scarf', 'apparel.jeans', 'furniture.bedroom.blanket',
                'accessories.umbrella', 'kids.swing',
                'auto.accessories.anti_freeze', 'electronics.camera.photo',
                'computers.peripherals.camera', 'stationery.cartrige',
                'country_yard.furniture.hammok', 'apparel.shoes.sandals',
                'apparel.belt', 'sport.tennis', 'country_yard.lawn_mower',
                'apparel.shoes.espadrilles', 'appliances.environment.fan',
                'apparel.shoes.step_ins', 'apparel.sock', 'apparel.shorts',
                'country_yard.furniture.bench', 'apparel.skirt', 'apparel.glove',
                'construction.tools.soldering', 'apparel.jacket',
                'appliances.kitchen.fryer', 'construction.tools.screw']

    def getComp(self, category, price):
        fil = []
        for row in self.df.itertuples(index=True, name='Pandas'):
            if row.category == category:
                fil.append([row.brand, row.price])
        df2 = pd.DataFrame(fil)
        df2.columns = ['Brand', 'Price']

        pred = df2.iloc[(df2['Price'] - price).abs().argsort()]
        dd = pred.drop_duplicates(subset='Brand')
        dd = pd.DataFrame(dd)
        i = 0
        res = []
        for row in dd.itertuples(index=True, name='Pandas'):
            if i < 5:
                res.append([row.Brand, row.Price])
                i += 1
        res2 = pd.DataFrame(res)
        res2.columns = ['Brand', 'Price']
        return res2['Brand'].values

    def getPrice(self, category):
        priceRange = []
        for row in self.df.itertuples(index=True, name='Pandas'):
            if row.category == category:
                priceRange.append([row.category, row.brand, row.price])
        priceRange = pd.DataFrame(priceRange)
        priceRange.columns = ['Category', 'Brand', 'Price']
        resp = []
        resp.append([priceRange.Price.min(), priceRange.Price.max()])
        return resp
