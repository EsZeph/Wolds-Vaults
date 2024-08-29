let removedOutputsSCAN = [
    'scannable:scanner',
    'scannable:blank_module',
    'scannable:range_module',
    'scannable:entity_module',
    'scannable:hostile_entity_module',
    'scannable:friendly_entity_module',
    'scannable:common_ores_module',
    'scannable:rare_ores_module',
    'scannable:block_module'
];
onEvent("recipes", event => {
    removedOutputsSCAN.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('scannable:scanner'),
        [
            'G G',
            'DCD',
            'LBL'
        ], {
        G: 'woldsvaults:extraordinary_pog_prism',
        D: 'the_vault:chromatic_steel_block',
        C: 'the_vault:vault_diamond_block',
        L: 'the_vault:black_chromatic_steel_ingot',
        B: 'the_vault:extraordinary_benitoite'
    })

    event.shaped(Item.of('scannable:blank_module'),
        [
            'GGG',
            'DCD',
            'DBD'
        ], {
        G: 'the_vault:vault_essence_1',
        D: 'the_vault:perfect_larimar',
        C: 'the_vault:magic_silk_block',
        B: 'the_vault:gem_pog'
    })

    event.shaped(Item.of('scannable:range_module'),
        [
            'XRX',
            'RMR',
            'XRX'
        ], {
        M: 'scannable:blank_module',
        R: 'minecraft:ender_pearl',
        X: 'the_vault:echo_pog'
    })

    event.shaped(Item.of('scannable:hostile_entity_module'),
        [
            'XRX',
            'RMR',
            'XRX'
        ], {
        M: 'scannable:blank_module',
        R: '#the_vault:hostileegg',
        X: 'the_vault:extraordinary_larimar'
    })

    event.shaped(Item.of('scannable:entity_module'),
        [
            'XRX',
            'RMR',
            'XRX'
        ], {
        M: 'scannable:blank_module',
        R: 'minecraft:lead',
        X: 'the_vault:extraordinary_larimar'
    })

    event.shaped(Item.of('scannable:friendly_entity_module'),
        [
            'XRX',
            'RMR',
            'XRX'
        ], {
        M: 'scannable:blank_module',
        R: '#the_vault:passiveegg',
        X: 'the_vault:extraordinary_larimar'
    })

    event.shaped(Item.of('scannable:block_module'),
        [
            'XRX',
            'GMG',
            'XBX'
        ], {
        M: 'scannable:blank_module',
        R: 'the_vault:omega_pog',
        X: 'the_vault:extraordinary_black_opal',
        G: 'the_vault:black_chromatic_steel_block',
        B: 'the_vault:wold_star'
    })

    event.shaped(Item.of('scannable:common_ores_module'),
        [
            'XRX',
            'RMR',
            'XRX'
        ], {
        M: 'scannable:blank_module',
        R: 'minecraft:coal',
        X: 'the_vault:extraordinary_larimar'
    })

    event.shaped(Item.of('scannable:rare_ores_module'),
        [
            'XRX',
            'RMR',
            'XRX'
        ], {
        M: 'scannable:blank_module',
        R: 'minecraft:diamond',
        X: 'the_vault:extraordinary_larimar'
    })

    event.shaped(Item.of('scannable:vault_ores_module'),
        [
            'XVX',
            'RMR',
            'XBX'
        ], {
        M: 'scannable:blank_module',
        R: '#the_vault:vault_ores',
        X: 'the_vault:gem_pog',
        V: 'the_vault:pog_prism',
        B: 'the_vault:black_chromatic_steel_block'
    })

    event.shaped(Item.of('scannable:vault_chests_module'),
        [
            'ABC',
            'XMX',
            'DEF'
        ], {
        M: 'scannable:blank_module',
        A: 'scannable:vault_chests_module_gilded',
        B: 'scannable:vault_chests_module_living',
        C: 'scannable:vault_chests_module_ornate',
        D: 'scannable:vault_chests_module_wooden',
        E: 'scannable:vault_chests_module_raw',
        F: 'scannable:vault_chests_module_treasure',
        X: 'the_vault:omega_pog'
    })

    event.shaped(Item.of('scannable:vault_chests_module_wooden'),
        [
            'XBX',
            'AMA',
            'XBX'
        ], {
        M: 'scannable:blank_module',
        A: 'the_vault:wooden_chest_placeable',
        B: 'the_vault:pog_prism',
        X: 'the_vault:extraordinary_larimar'
    })

    event.shaped(Item.of('scannable:vault_chests_module_ornate'),
        [
            'XBX',
            'AMA',
            'XBX'
        ], {
        M: 'scannable:blank_module',
        A: 'the_vault:ornate_chest_placeable',
        B: 'the_vault:pog_prism',
        X: 'the_vault:extraordinary_painite'
    })

    event.shaped(Item.of('scannable:vault_chests_module_living'),
        [
            'XBX',
            'AMA',
            'XBX'
        ], {
        M: 'scannable:blank_module',
        A: 'the_vault:living_chest_placeable',
        B: 'the_vault:pog_prism',
        X: 'the_vault:extraordinary_alexandrite'
    })

    event.shaped(Item.of('scannable:vault_chests_module_gilded'),
        [
            'XBX',
            'AMA',
            'XBX'
        ], {
        M: 'scannable:blank_module',
        A: 'the_vault:gilded_chest_placeable',
        B: 'the_vault:pog_prism',
        X: 'the_vault:vault_diamond_block'
    })

    event.shaped(Item.of('scannable:vault_chests_module_raw'),
        [
            'XBX',
            'AMA',
            'XBX'
        ], {
        M: 'scannable:blank_module',
        A: 'the_vault:enigma_chest_placeable',
        B: 'the_vault:pog_prism',
        X: 'the_vault:extraordinary_larimar'
    })

    event.shaped(Item.of('scannable:vault_chests_module_treasure'),
        [
            'XBX',
            'AMA',
            'XBX'
        ], {
        M: 'scannable:blank_module',
        A: 'the_vault:treasure_chest_placeable',
        B: 'the_vault:pog_prism',
        X: 'the_vault:extraordinary_larimar'
    })

    event.shaped(Item.of('scannable:vault_coins_module'),
        [
            'XBX',
            'AMA',
            'XBX'
        ], {
        M: 'scannable:blank_module',
        A: 'the_vault:vault_palladium',
        B: 'the_vault:pog_prism',
        X: 'the_vault:vault_diamond_block'
    })

    event.shaped(Item.of('scannable:vault_spirit_module'),
        [
            'XBX',
            'AMA',
            'XBX'
        ], {
        M: 'scannable:blank_module',
        A: 'the_vault:eternal_soul',
        B: 'the_vault:pog_prism',
        X: 'the_vault:compressed_soot_block'
    })


    event.shaped(Item.of('scannable:vault_cake_module'),
        [
            'XBX',
            'AMA',
            'XBX'
        ], {
        M: 'scannable:blank_module',
        A: 'the_vault:wold_star',
        B: 'the_vault:omega_pog',
        X: 'the_vault:vault_sweets_block'
    })


    event.shaped(Item.of('scannable:vault_objectives_module'),
        [
            'XBX',
            'AMA',
            'XBX'
        ], {
        M: 'scannable:blank_module',
        A: 'the_vault:vault_compass',
        B: 'the_vault:omega_pog',
        X: 'the_vault:black_chromatic_steel_block'
    })


    event.shaped(Item.of('scannable:vault_doors_module'),
        [
            'XBX',
            'AMP',
            'XBX'
        ], {
        M: 'scannable:blank_module',
        A: 'the_vault:key_mould',
        B: 'the_vault:wold_star_chunk',
        X: 'the_vault:black_chromatic_steel_block',
        P: 'the_vault:omega_pog'
    })






})