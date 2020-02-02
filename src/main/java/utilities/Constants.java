package utilities;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Constants {
	public static String MAPS_INFOBANK_FILEPATH = "./TestData/MAPS_INFOBANK.xlsm";
	public static String RESULT_FILEPATH = "./Output/CompareTask.xlsx";

	public static Connection databaseConnection;
	public static Statement statement;
	public static ResultSet resultset;
	public static ResultSetMetaData resultsetMetadata;	
	public static XSSFWorkbook workbook;
	public static XSSFWorkbook MAPS_Infobank;
	public static XSSFSheet Environments;
	public static XSSFSheet Input_SQLS;
	public static XSSFSheet TestCases;
	public static String MAPS_UI_URL;
	public static String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
	public static Path currentRelativePath = Paths.get("");
	public static String currentDir = currentRelativePath.toAbsolutePath().normalize().toString();
	public static final String ReportsPath = currentDir + "\\Reports\\";

	public static void startInfobank() throws InvalidFormatException, IOException {
		MAPS_Infobank = new XSSFWorkbook(new File(Constants.MAPS_INFOBANK_FILEPATH));
		Environments = MAPS_Infobank.getSheet("Environments");
		Input_SQLS = MAPS_Infobank.getSheet("Input_SQLS");
		TestCases = MAPS_Infobank.getSheet("TestCases");
		String getEnvironment = Constants.Environments.getRow(1).getCell(0).getStringCellValue();
		System.out.println(getEnvironment);
		//String getEnvironment = BuildParameters.GetBaseURI();
		for (int i = 1; i <= Constants.Environments.getLastRowNum(); i++) {
			if (Environments.getRow(i).getCell(1).getStringCellValue().equalsIgnoreCase(getEnvironment)) {
				MAPS_UI_URL = Constants.Environments.getRow(i).getCell(2).getStringCellValue();	
				break;
			}
		}
	}

}
