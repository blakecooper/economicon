#include <string>
#include <list>
#include <iostream>
#include "Markets.h"
using namespace std;

class Tradable {
    public:
        string name;
    
        string getName() {
            return name;
        }

        void setName(string newName) {
            name = newName;
        }
};

class Share {
    Commodity *commodity;

    public:
        Share(Commodity *parentCommodity) {
            commodity = parentCommodity;
        }
        Commodity *getCommodity() {
          return commodity;
        }
};

class Commodity : public Tradable {
    string nameOfShares = "shares";
    int sharesIssued;
    int sharesOutstanding;
    float pricePerShare;
    list<Share> shares;

    public:
        Commodity (string commodityName, int numberShares, float priceShare) {
            name = commodityName;
            sharesIssued = numberShares;
            sharesOutstanding = 0;
            pricePerShare = priceShare;
            for (int i = 0; i < numberShares; i++) {
                Share *share = new Share(this);
                shares.push_back(*share);
            }
        }  
        
        string getNameOfShares() {
            return nameOfShares;
        }

        int getSharesIssued() {
            return sharesIssued;
        }

        int getSharesOutstanding() {
            return sharesOutstanding;
        }

        list<Share> getShares() {
            return shares;
        }

        float getPricePerShare() {
            return pricePerShare;
        }

        double getCap() {
            return sharesOutstanding * pricePerShare;
        }

        int getNumberSharesOnMarket() {
            return sharesIssued - sharesOutstanding;
        }

        bool sharesAreAvailableOnMarket() {
            if (getNumberSharesOnMarket() > 0) {
                return true;
            }

            return false;
        }

        void buyShares(int number) {
            if (sharesIssued >= number && getNumberSharesOnMarket() >= number) {
                for (int i = 0; i < number; i++) {
                    shares.pop_back();
                    sharesOutstanding++;
                }
            } else {
                cout << "Insufficient number of shares available for purchase.";
            }
        }

        void setPricePerShare(float price) {
            pricePerShare = price;
        }
};

class Market : public Tradable {
    list<Commodity*> commodities;

    public:
        Market(string marketName) {
            name = marketName;
        }

        void addCommodity(Commodity *commodity) {
            commodities.push_back(commodity);
        }

        void removeCommodity(Commodity *commodity) {
            commodities.remove(commodity);
        }

        list<Commodity*> getCommodities() {
            return commodities;
        }

        double getCap() {
            double cap = 0;
            list<Commodity*>::iterator iter = commodities.begin();
            while (iter != commodities.end()) {
                Commodity *aCommodity = *iter;
                cap += aCommodity->getCap();
                ++iter;
            }

            return cap;
        }
};
