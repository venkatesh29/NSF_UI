package utilities;

import java.io.FileInputStream;
import java.io.FileOutputStream;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelFileUtil {
Workbook wb;
	
	//it will load all the Excel Sheet
	public ExcelFileUtil() throws Throwable
	{
		FileInputStream fis=new FileInputStream("C:\\Users\\VENKATESH_VILLA\\eclipse-workspace\\NSF_UI\\TestData\\InputSheet.xlsx");
		wb=new XSSFWorkbook(fis);
		
	}
	public int rowCount(String sheetname)
	{
		return wb.getSheet(sheetname).getLastRowNum();
	}
	public int colCount(String sheetname,int row)
	{
		return wb.getSheet(sheetname).getRow(row).getLastCellNum();
	}
	
	public String getData(String sheetname,int row ,int column)
	{
		String data="";
		if(wb.getSheet(sheetname).getRow(row).getCell(column).getCellType()==Cell.CELL_TYPE_NUMERIC)
		{
			int celldata=(int)(wb.getSheet(sheetname).getRow(row).getCell(column).getNumericCellValue());
			data=String.valueOf(celldata);
			
		}else
		{
			data=wb.getSheet(sheetname).getRow(row).getCell(column).getStringCellValue();
		}
		return data;
	}
	
// Store data into excel sheet Pass Or Fail and Not Executed
	
	public void setData(String sheetname,int row, int column,String Status) throws Throwable
	{	
//		System.out.println(sheetname+" "+row+" "+column+" "+Status);
		
		FileInputStream fis =new FileInputStream("./TestOutput/OutPutSheet.xlsx");
		XSSFWorkbook workbook = new XSSFWorkbook(fis);
        XSSFSheet sheet = workbook.getSheet(sheetname);
        
        Row rownum;
        
        try {
		        rownum = sheet.getRow(row);
		        Cell cell = rownum.createCell(column);
				cell.setCellValue(Status);
        }catch(Exception e) {
        		rownum = sheet.createRow(row);
        		Cell cell = rownum.createCell(column);
		        cell.setCellValue(Status);
        }
		
        FileOutputStream fos =new FileOutputStream("./TestOutput/OutPutSheet.xlsx");
		workbook.write(fos);
		fos.close();
		
	}
}
