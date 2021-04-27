#include <string>
#include <iostream>
#include <GLFW/glfw3.h>
using namespace std;

class Console {
    public:
        Console() {

        }

        static void print(string toPrint) {
            cout << toPrint;
        }

        static void newLine() {
            cout << "\n";
        }
};

//int main() {
//    if (!glfwInit()) {
//        // Initialization failed
//        return -1;
//    }

//    glfwTerminate();

//    return 0;
//};
