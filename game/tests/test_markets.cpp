#include "../Markets.cpp"
#include "../Player.cpp"
#include <iostream>
#include <string>
using namespace std;

void printShareIsOutstanding(Share share) {
	if (share.isOutstanding()) {
		cout << "Share is outstanding (held by a third party).";
	} else {
		cout << "Share is available for purchase.";
	}
}

void testShare() {
	Share testShare;

	cout << "One share of " + testShare.getName() + "\n";	
	
    printShareIsOutstanding(testShare);

    testShare.setIsOutstandingTo(true);
    
    printShareIsOutstanding(testShare);
}

void testCommodity() {
    Commodity *commodity = new Commodity ("Pepsi", 100, 1.00);

    cout << "There are " + to_string(commodity->getNumberSharesOnMarket()) + " shares of " + commodity->getName() + "available for purchase at " + to_string(commodity->getPricePerShare());

    cout << "Market cap is: " + to_string(commodity->getCap());

    commodity->buyShares(50);

    cout << "Now there are " + to_string(commodity->getNumberSharesOnMarket()) + " shares available (" + to_string(commodity->getSharesOutstanding()) + " shares outstanding).";

    cout << "Market cap is: " + to_string(commodity->getCap());

    commodity->setPricePerShare(5.00);

    cout << "Share price increased to $" + to_string(commodity->getPricePerShare()) + ". Market cap is now: " + to_string(commodity->getCap());
}

void testMarket() {
    Market *market = new Market("S&P 100");

    for (int i = 0; i < 100; i++) {
        Commodity *commodity = new Commodity("Pepsi", 100, 1.00);
        commodity->buyShares(100);
        
        market->addCommodity(commodity);
    }

    cout << "Market cap is :\n";
    printf("%.2f", market->getCap());
}

int main () {
	//testShare();

    //testCommodity();

    testMarket();
	return 0;
}
