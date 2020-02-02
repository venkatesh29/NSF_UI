package utilities;


public class BuildParameters {	
	public static String BASE_URI="Tst3";
	private static String _reportName = "last_report.html";
	//private static String _serviceName = "servicename";
	private static String _baseURI="baseuri";
	private static String _testTags = "cucumber.options";
	
	public static String GetBaseURI()
	{
		String env = System.getProperty(_baseURI);
		if(null!=env && !env.isEmpty()) {
			//BASE_URI =  String.format("https://%s", env);
			BASE_URI =  env;
			return BASE_URI;
		}
		
		return BASE_URI;
	}
	
	/*public static String GetTestReportName()
	{
		String service = System.getProperty(_serviceName);
		if(null!=service && !service.isEmpty()) {
			_reportName =  String.format("%s.html", service);
			return _reportName;
		}
		
		return _reportName;
	}*/
}
