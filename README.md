# ClientContextSession -  AEM Users Group Kickoff meeting

This project is a demo project for Client Context Session which took place on 10th Oct 2015 and was the kickoff meeting
of AEM Users Group Hyderabad. Under content module there are certain custom client context components which can be added
to client context and utilized.


Building
--------

This project uses Maven for building. Common commands:

From the root directory, run ``mvn -PautoInstallPackage clean install`` to build the bundle and content package and install to a CQ instance.

From the bundle directory, run ``mvn -PautoInstallBundle clean install`` to build *just* the bundle and install to a CQ instance.

* In case you are running your CQ instance on any other port number here is the command for building :

mvn clean install -PautoInstallPackage -Dcrx.port=<Port-Number>

Specifying CRX Host/Port
------------------------

The CRX host and port can be specified on the command line with:
mvn -Dcrx.host=otherhost -Dcrx.port=5502 <goals>

# Author

### **_Ankit gubrani_**

Contact Info :

* [LinkedIn](https://in.linkedin.com/pub/ankit-gubrani/74/a75/56b "Ankit Gubrani")
* [Twitter](https://twitter.com/ankitgubrani90)
* [Blog](http://codebrains.blogspot.in/)
* [Slideshare](http://www.slideshare.net/ankitgubrani/)
* [Site](http://www.codebrains.co.in/ankitgubrani)




