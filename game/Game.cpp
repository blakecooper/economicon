#include <stdlib.h>
#include <time.h>
#include <string>
#include "constants.h"
#include "Settings.cpp"
#include "Markets.cpp"
#include "Player.cpp"
#include "Console.cpp"

using namespace std;

float round(float var) {
    float value = (int) ((var * 100) + .5);
    return (float) value / 100;
}

class Game {
    Player *player;
    Market *stocks;
    Console *console;

    void initMarkets() {

        stocks = new Market(NAME_MARKETS_STOCKS);

        for (int i = 0; i < NUMBER_STOCKS; i++) {
            string name =
                NAMES_FIRST_SYLLABLE[rand() % SIZE_OF_NAMES_FIRST_SYLLABLE] + 
                NAMES_LAST_SYLLABLE[rand() % SIZE_OF_NAMES_LAST_SYLLABLE];
            
            Commodity *commodity = new Commodity(name, NUMBER_SHARES_ISSUED_DEFAULT,(float) (rand() % MAXIMUM_INITIAL_PRICE_PER_SHARE));

            stocks->addCommodity(commodity);
        }
    }

    public:
    
        void printMarketInfo() {
            list<Commodity*> commodities = stocks->getCommodities();
    
            console->print("Stock | Price | Shares Issued | Shares Available | Market Cap");
            console->newLine();

            for (list<Commodity*>::iterator i = commodities.begin(); i != commodities.end(); i++) {
                Commodity *commodity = *i;
                console->print(commodity->getName() + " | ");
                console->print(to_string(round(commodity->getPricePerShare())) + " | "); 
                console->print(to_string(round(commodity->getSharesIssued())) + " | ");
                console->print(to_string(round(commodity->getNumberSharesOnMarket())) + " | ");
                console->print(to_string(round(commodity->getCap())));
    
                console->newLine();
            }
        }
        
        Game(string name, int difficulty) {

            srand(time(NULL));

            player = new Player(name, difficulty);
            console = new Console();

            initMarkets();

        }
};

int main() {
    Game *game = new Game("Blake Cooper", 0);

    game->printMarketInfo();
}
