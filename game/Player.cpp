#include <string>
using namespace std;

class Player {
    string name;
    double funds;
    int difficulty;

    public:
        Player(string playerName, int playerDifficulty) {
            name = playerName;
            funds = 5000.00;
            difficulty = playerDifficulty;
        }

        string getName() {
            return name;
        }
};
