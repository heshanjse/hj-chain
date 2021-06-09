const Block = require('./block');

describe('Block', () => {

    let data,lastBlock, block;

    beforeEach(() => {
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineblock(lastBlock,data);

    });
    it('set the `data` to match the input',() => {
        expect(block.data).toEqual(data);
    });

    it('set the `last hash` to match the hash of the last block',() => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });
    
})